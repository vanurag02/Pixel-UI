import "./Switch.css";

function Switch({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  size = "md",
  label,
  labelPosition = "right",
  className,
  style,
}) {
  return (
    <label
      className={[
        "switch",
        `switch--${size}`,
        `switch--label-${labelPosition}`,
        disabled ? "switch--disabled" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {label && labelPosition === "left" && (
        <span className="switch__label">{label}</span>
      )}

      <div className="switch__track-wrapper">
        <input
          type="checkbox"
          className="switch__input"
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          disabled={disabled}
        />
        <div className="switch__track">
          <div className="switch__thumb"></div>
        </div>
      </div>

      {label && labelPosition === "right" && (
        <span className="switch__label">{label}</span>
      )}
    </label>
  );
}

export default Switch;
