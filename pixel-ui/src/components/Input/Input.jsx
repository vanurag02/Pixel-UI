import { useId } from "react";
import "./Input.css";

function Input({
  id,
  name,
  type = "text",

  // ACCESSIBILITY
  ariaLabel,
  ariaDescribedBy,

  // STATE
  disabled = false,
  error = false,
  required = false,

  // UI
  size = "md",
  variant = "default",
  radius = "default",
  fullWidth = false,

  // VALUE
  value,
  defaultValue,
  onChange,
  placeholder,
  autoComplete,

  // SECTIONS
  leftSection,
  rightSection,

  // STYLING
  className,
  style,
}) {
  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <div
      className={[
        "input-wrapper",
        `input-wrapper--${size}`,
        `input-wrapper--${variant}`,
        `input-wrapper--radius-${radius}`,
        fullWidth ? "input-wrapper--full-width" : "",
        disabled ? "input-wrapper--disabled" : "",
        error ? "input-wrapper--error" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {leftSection && (
        <span
          className="input__section input__section--left"
          aria-hidden="true"
        >
          {leftSection}
        </span>
      )}

      <input
        id={inputId}
        name={name}
        type={type}
        className={[
          "input",
          leftSection ? "input--has-left" : "",
          rightSection ? "input--has-right" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
        required={required}
        autoComplete={autoComplete}
        aria-label={!ariaLabel && !name ? undefined : ariaLabel}
        aria-invalid={error || undefined}
        aria-describedby={ariaDescribedBy}
        aria-required={required || undefined}
      />

      {rightSection && (
        <span
          className="input__section input__section--right"
          aria-hidden="true"
        >
          {rightSection}
        </span>
      )}
    </div>
  );
}

export default Input;
