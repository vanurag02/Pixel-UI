import { useState, useRef, useEffect, useId } from "react";
import { ChevronDown, X } from "lucide-react";
import "./Combobox.css";

function Combobox({
  id,
  name,
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
  const internalId = useId();
  const inputId = id || `combobox-${internalId}`;
  const listboxId = `${inputId}-listbox`;

  const getInitial = () => {
    if (value !== undefined) return value;
    if (defaultValue !== undefined) return defaultValue;
    return multiple ? [] : "";
  };

  const [internalValue, setInternalValue] = useState(getInitial);
  const [inputText, setInputText] = useState("");
  const [opened, setOpened] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const wrapperRef = useRef(null);

  const currentValue = value !== undefined ? value : internalValue;

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpened(false);
        setActiveIndex(-1);
        if (!multiple) setInputText("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [multiple]);

  const filteredData = data.filter((item) => {
    const match = item.toLowerCase().includes(inputText.toLowerCase());
    if (multiple) return match && !currentValue.includes(item);
    return match;
  });

  const handleSelect = (item) => {
    if (multiple) {
      const newValue = [...currentValue, item];
      if (value === undefined) setInternalValue(newValue);
      onChange?.(newValue);
      setInputText("");
    } else {
      if (value === undefined) setInternalValue(item);
      onChange?.(item);
      setInputText(item);
      setOpened(false);
    }
    setActiveIndex(-1);
  };

  const handleRemove = (item) => {
    const newValue = currentValue.filter((v) => v !== item);
    if (value === undefined) setInternalValue(newValue);
    onChange?.(newValue);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    setOpened(true);
    setActiveIndex(-1);
    if (!multiple && value === undefined) setInternalValue("");
  };

  const handleKeyDown = (e) => {
    if (!opened && e.key === "ArrowDown") {
      setOpened(true);
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev < filteredData.length - 1 ? prev + 1 : 0));
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : filteredData.length - 1));
    }

    if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      handleSelect(filteredData[activeIndex]);
    }

    if (e.key === "Escape") {
      setOpened(false);
      setActiveIndex(-1);
    }
  };

  return (
    <div
      ref={wrapperRef}
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
                  type="button"
                  className="combobox__tag-remove"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemove(item);
                  }}
                  aria-label={`Remove ${item}`}
                >
                  <X size={10} />
                </button>
              </span>
            ))}
          </div>
        )}

        <input
          id={inputId}
          name={name}
          type="text"
          role="combobox"
          aria-expanded={opened}
          aria-controls={listboxId}
          aria-activedescendant={
            activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined
          }
          aria-autocomplete="list"
          aria-invalid={error || undefined}
          disabled={disabled}
          className="combobox__input"
          value={
            multiple
              ? inputText
              : inputText ||
                (typeof currentValue === "string" ? currentValue : "")
          }
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => !disabled && setOpened(true)}
          placeholder={multiple && currentValue.length > 0 ? "" : placeholder}
        />

        <ChevronDown
          size={16}
          className={`combobox__arrow ${opened ? "combobox__arrow--up" : ""}`}
          aria-hidden="true"
        />
      </div>

      {opened && (
        <div id={listboxId} role="listbox" className="combobox__menu">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <button
                key={item}
                id={`${listboxId}-option-${index}`}
                role="option"
                aria-selected={activeIndex === index}
                className="combobox__option"
                onClick={() => handleSelect(item)}
                type="button"
              >
                {item}
              </button>
            ))
          ) : (
            <div className="combobox__empty">No options found</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Combobox;
