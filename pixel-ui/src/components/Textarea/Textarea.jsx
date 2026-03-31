import "./Textarea.css";

function Textarea({
  size = "md",
  variant = "default",
  placeholder,
  value,
  defaultValue,
  onChange,
  disabled = false,
  error = false,
  radius = "default",
  rows = 4,
  resize = "vertical",
  fullWidth = false,
  className,
  style,
}) {
  return (
    <textarea
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
      rows={rows}
    />
  );
}

export default Textarea;
