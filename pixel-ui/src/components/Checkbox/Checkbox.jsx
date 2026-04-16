import { useRef, useEffect } from "react";
import "./Checkbox.css";

function Checkbox({
  id,
  name,
  value,

  checked,
  defaultChecked = false,
  indeterminate = false,
  onChange,

  disabled = false,
  required = false,

  label,
  ariaLabel,

  size = "md",
  className,
  style,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const isChecked = indeterminate ? "mixed" : checked;

  return (
    <label
      className={[
        "checkbox",
        `checkbox--${size}`,
        disabled ? "checkbox--disabled" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      <input
        ref={inputRef}
        id={id}
        name={name}
        value={value}
        type="checkbox"
        className="checkbox__input"
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
        required={required}
        // Accessibility
        aria-label={!label ? ariaLabel : undefined}
        aria-checked={isChecked}
        aria-disabled={disabled || undefined}
      />

      <span className="checkbox__box"></span>

      {label && <span className="checkbox__label">{label}</span>}
    </label>
  );
}

export default Checkbox;
