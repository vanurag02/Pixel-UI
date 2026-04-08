import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import "./Dropdown.css";

function Dropdown({
  label,
  children,
  variant = "outline",
  size = "md",
  disabled = false,
  className,
  style,
}) {
  const [opened, setOpened] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpened(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={["dropdown", className].filter(Boolean).join(" ")}
      style={style}
      ref={dropdownRef}
    >
      <button
        className={[
          "dropdown__trigger",
          `dropdown__trigger--${variant}`,
          `dropdown__trigger--${size}`,
          disabled ? "dropdown__trigger--disabled" : "",
          opened ? "dropdown__trigger--active" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        onClick={() => !disabled && setOpened(!opened)}
        disabled={disabled}
        type="button"
      >
        <span>{label}</span>
        <ChevronDown
          size={16}
          className={`dropdown__arrow ${opened ? "dropdown__arrow--up" : ""}`}
        />
      </button>

      {opened && <div className="dropdown__menu">{children}</div>}
    </div>
  );
}

export default Dropdown;
