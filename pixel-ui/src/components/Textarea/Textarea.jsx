import { useId } from "react";
import "./Textarea.css";

function Textarea({
  id,
  name,

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
  rows = 4,
  resize = "vertical",
  fullWidth = false,

  // VALUE
  value,
  defaultValue,
  onChange,
  placeholder,
  autoComplete,

  className,
  style,
}) {
  const generatedId = useId();
  const textareaId = id || generatedId;

  return (
    <textarea
      id={textareaId}
      name={name}
      className={[
        "textarea",
        `textarea--${size}`,
        `textarea--${variant}`,
        `textarea--radius-${radius}`,
        `textarea--resize-${resize}`,
        fullWidth ? "textarea--full-width" : "",
        disabled ? "textarea--disabled" : "",
        error ? "textarea--error" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      disabled={disabled}
      required={required}
      rows={rows}
      autoComplete={autoComplete}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-invalid={error || undefined}
      aria-required={required || undefined}
    />
  );
}

export default Textarea;
