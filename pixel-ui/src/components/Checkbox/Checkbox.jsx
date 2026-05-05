import { useRef, useEffect, useId } from "react";
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
  const generatedId = useId();
  const inputId = id || generatedId;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const ariaChecked = indeterminate ? "mixed" : checked;

  return (
    <label
      htmlFor={inputId}
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
        id={inputId}
        name={name}
        value={value}
        type="checkbox"
        className="checkbox__input"
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
        required={required}
        aria-label={!label ? ariaLabel : undefined}
        aria-checked={ariaChecked}
      />

      <span className="checkbox__box" aria-hidden="true"></span>

      {label && <span className="checkbox__label">{label}</span>}
    </label>
  );
}

export default Checkbox;
