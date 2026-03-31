import { useRef, useEffect } from "react";
import "./Checkbox.css";

function Checkbox({
  checked,
  defaultChecked = false,
  indeterminate = false,
  onChange,
  disabled = false,
  label,
  size = "md",
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <label
      className={[
        "checkbox",
        `checkbox--${size}`,
        disabled ? "checkbox--disabled" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <input
        ref={inputRef}
        type="checkbox"
        className="checkbox__input"
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="checkbox__box"></span>
      {label && <span className="checkbox__label">{label}</span>}
    </label>
  );
}

export default Checkbox;
