import { useId } from "react";
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
  const id = useId();

  const isChecked = checked ?? defaultChecked;

  return (
    <label
      htmlFor={id}
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
          id={id}
          type="checkbox"
          role="switch"
          className="switch__input"
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          disabled={disabled}
          aria-checked={isChecked}
          aria-disabled={disabled || undefined}
        />

        <div className="switch__track" aria-hidden="true">
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
