import { forwardRef, useId } from "react";
import "./RadioGroup.css";

const RadioItem = forwardRef(function RadioItem(
  {
    value,
    label,
    name,
    size = "md",
    checked,
    defaultChecked,
    onChange,
    disabled = false,
    tabIndex,
    onKeyDown,
  },
  ref,
) {
  const id = useId();

  return (
    <label
      htmlFor={id}
      className={[
        "radio-item",
        `radio-item--${size}`,
        disabled ? "radio-item--disabled" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <input
        ref={ref}
        id={id}
        type="radio"
        className="radio-item__input"
        value={value}
        name={name}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
        tabIndex={tabIndex}
        onKeyDown={onKeyDown}
      />

      <span className="radio-item__circle" aria-hidden="true"></span>

      {label && <span className="radio-item__label">{label}</span>}
    </label>
  );
});

export default RadioItem;
