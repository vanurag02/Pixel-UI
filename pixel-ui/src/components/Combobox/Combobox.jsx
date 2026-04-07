import { useState, useRef, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";
import "./Combobox.css";

function Combobox({
  data = [],
  value,
  defaultValue,
  onChange,
  placeholder,
  multiple = false,
  size = "md",
  radius = "default",
  disabled = false,
  error = false,
  fullWidth = false,
  className,
  style,
}) {
  const getInitial = () => {
    if (value !== undefined) return value;
    if (defaultValue !== undefined) return defaultValue;
    return multiple ? [] : "";
  };

  const [internalValue, setInternalValue] = useState(getInitial);
  const [inputText, setInputText] = useState("");
  const [opened, setOpened] = useState(false);
  const wrapperRef = useRef(null);

  const currentValue = value !== undefined ? value : internalValue;

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpened(false);
        if (!multiple) setInputText("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [multiple]);

  const filteredData = data.filter((item) => {
    const matchesSearch = item.toLowerCase().includes(inputText.toLowerCase());
    if (multiple) {
      return matchesSearch && !currentValue.includes(item);
    }
    return matchesSearch;
  });

  const handleSelect = (item) => {
    if (multiple) {
      const newValue = [...currentValue, item];
      if (value === undefined) setInternalValue(newValue);
      if (onChange) onChange(newValue);
      setInputText("");
    } else {
      if (value === undefined) setInternalValue(item);
      if (onChange) onChange(item);
      setInputText(item);
      setOpened(false);
    }
  };

  const handleRemove = (item) => {
    const newValue = currentValue.filter((v) => v !== item);
    if (value === undefined) setInternalValue(newValue);
    if (onChange) onChange(newValue);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    setOpened(true);
    if (!multiple && value === undefined) setInternalValue("");
  };

  return (
    <div
      className={[
        "combobox",
        `combobox--${size}`,
        `combobox--radius-${radius}`,
        fullWidth ? "combobox--full-width" : "",
        disabled ? "combobox--disabled" : "",
        error ? "combobox--error" : "",
        opened ? "combobox--opened" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
      ref={wrapperRef}
    >
      <div
        className="combobox__input-wrapper"
        onClick={() => !disabled && setOpened(true)}
      >
        {multiple && currentValue.length > 0 && (
          <div className="combobox__tags">
            {currentValue.map((item) => (
              <span key={item} className="combobox__tag">
                {item}
                <button
                  className="combobox__tag-remove"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemove(item);
                  }}
                  type="button"
                >
                  <X size={10} />
                </button>
              </span>
            ))}
          </div>
        )}
        <input
          type="text"
          className="combobox__input"
          value={
            multiple
              ? inputText
              : inputText ||
                (typeof currentValue === "string" ? currentValue : "")
          }
          onChange={handleInputChange}
          onFocus={() => !disabled && setOpened(true)}
          placeholder={multiple && currentValue.length > 0 ? "" : placeholder}
          disabled={disabled}
        />
        <ChevronDown
          size={16}
          className={`combobox__arrow ${opened ? "combobox__arrow--up" : ""}`}
        />
      </div>

      {opened && filteredData.length > 0 && (
        <div className="combobox__menu">
          {filteredData.map((item) => (
            <button
              key={item}
              className="combobox__option"
              onClick={() => handleSelect(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {opened && filteredData.length === 0 && (
        <div className="combobox__menu">
          <div className="combobox__empty">No options found</div>
        </div>
      )}
    </div>
  );
}

export default Combobox;
