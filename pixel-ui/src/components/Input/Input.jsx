import "./Input.css";

function Input({
  type = "text",
  size = "md",
  variant = "default",
  placeholder,
  value,
  defaultValue,
  onChange,
  disabled = false,
  error = false,
  radius = "default",
  fullWidth = false,
  leftSection,
  rightSection,
  className,
  style,
}) {
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
        <span className="input__section input__section--left">
          {leftSection}
        </span>
      )}

      <input
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
      />

      {rightSection && (
        <span className="input__section input__section--right">
          {rightSection}
        </span>
      )}
    </div>
  );
}

export default Input;
