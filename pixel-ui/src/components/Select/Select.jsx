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
    <select
      className={[
        "select",
        `select--${size}`,
        `select--radius-${radius}`,
        fullWidth ? "select--full-width" : "",
        disabled ? "select--disabled" : "",
        error ? "select--error" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
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
  );
}

export default Select;
