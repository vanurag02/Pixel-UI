import { ChevronDown } from "lucide-react";
import { useId } from "react";
import "./Select.css";

function Select({
  id,
  name,
  children,

  // ACCESSIBILITY
  ariaLabel,
  ariaDescribedBy,

  // STATE
  disabled = false,
  error = false,
  required = false,

  // VALUE
  value,
  defaultValue,
  onChange,

  // UI
  size = "md",
  radius = "default",
  placeholder,
  fullWidth = false,

  className,
  style,
}) {
  const generatedId = useId();
  const selectId = id || generatedId;

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
        id={selectId}
        name={name}
        className="select"
        value={value}
        defaultValue={defaultValue ?? (placeholder ? "" : undefined)}
        onChange={onChange}
        disabled={disabled}
        required={required}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        aria-invalid={error || undefined}
        aria-required={required || undefined}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {children}
      </select>

      <ChevronDown size={16} className="select__icon" aria-hidden="true" />
    </div>
  );
}

export default Select;
