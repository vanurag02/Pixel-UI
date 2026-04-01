import { useState } from "react";
import "./SpinButton.css";

function SpinButton({
  value,
  defaultValue = 0,
  onChange,
  min,
  max,
  step = 1,
  disabled = false,
  size = "md",
  fullWidth = false,
  className,
  style,
}) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const currentValue = value !== undefined ? value : internalValue;

  const updateValue = (newValue) => {
    if (min !== undefined && newValue < min) return;
    if (max !== undefined && newValue > max) return;
    if (value === undefined) setInternalValue(newValue);
    if (onChange) onChange(newValue);
  };

  const handleDecrement = () => updateValue(currentValue - step);
  const handleIncrement = () => updateValue(currentValue + step);

  const handleInputChange = (e) => {
    const newValue = Number(e.target.value);
    if (!isNaN(newValue)) updateValue(newValue);
  };

  const isDecrementDisabled =
    disabled || (min !== undefined && currentValue <= min);
  const isIncrementDisabled =
    disabled || (max !== undefined && currentValue >= max);

  return (
    <div
      className={[
        "spin-button",
        `spin-button--${size}`,
        fullWidth ? "spin-button--full-width" : "",
        disabled ? "spin-button--disabled" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      <button
        className="spin-button__btn spin-button__btn--decrement"
        onClick={handleDecrement}
        disabled={isDecrementDisabled}
        type="button"
        aria-label="Decrement"
      >
        −
      </button>

      <input
        type="number"
        className="spin-button__input"
        value={currentValue}
        onChange={handleInputChange}
        disabled={disabled}
        min={min}
        max={max}
        step={step}
      />

      <button
        className="spin-button__btn spin-button__btn--increment"
        onClick={handleIncrement}
        disabled={isIncrementDisabled}
        type="button"
        aria-label="Increment"
      >
        +
      </button>
    </div>
  );
}

export default SpinButton;
