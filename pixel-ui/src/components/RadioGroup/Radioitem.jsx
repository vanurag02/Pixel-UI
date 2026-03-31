import "./RadioGroup.css";

function RadioItem({
  value,
  label,
  name,
  size = "md",
  checked,
  defaultChecked,
  onChange,
  disabled = false,
}) {
  return (
    <label
      className={[
        "radio-item",
        `radio-item--${size}`,
        disabled ? "radio-item--disabled" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <input
        type="radio"
        className="radio-item__input"
        value={value}
        name={name}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="radio-item__circle"></span>
      {label && <span className="radio-item__label">{label}</span>}
    </label>
  );
}

export default RadioItem;
