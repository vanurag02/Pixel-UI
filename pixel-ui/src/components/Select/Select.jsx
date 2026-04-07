import { ChevronDown } from "lucide-react";
import "./Select.css";

function Select({
  children,
  value,
  defaultValue,
  onChange,
  disabled = false,
  error = false,
  size = "md",
  radius = "default",
  placeholder,
  fullWidth = false,
  className,
  style,
}) {
  return (
    <div
      className={[
        "select-wrapper",
        `select-wrapper--${size}`,
        `select-wrapper--radius-${radius}`,
        fullWidth ? "select-wrapper--full-width" : "",
        disabled ? "select-wrapper--disabled" : "",
        error ? "select-wrapper--error" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      <select
        className="select"
        value={value}
        defaultValue={defaultValue ?? (placeholder ? "" : undefined)}
        onChange={onChange}
        disabled={disabled}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {children}
      </select>
      <ChevronDown size={16} className="select__icon" />
    </div>
  );
}

export default Select;
