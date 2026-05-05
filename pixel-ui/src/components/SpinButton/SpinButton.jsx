import { useState, useId } from "react";
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
  label,
  ariaLabel,
  ariaDescribedBy,
  className,
  style,
}) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const currentValue = value !== undefined ? value : internalValue;

  const inputId = useId();
  const descriptionId = useId();

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

  const handleKeyDown = (e) => {
    if (disabled) return;

    if (e.key === "ArrowUp") {
      e.preventDefault();
      handleIncrement();
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      handleDecrement();
    }

    if (e.key === "Home" && min !== undefined) {
      e.preventDefault();
      updateValue(min);
    }

    if (e.key === "End" && max !== undefined) {
      e.preventDefault();
      updateValue(max);
    }
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
      {label && (
        <label htmlFor={inputId} className="spin-button__label">
          {label}
        </label>
      )}

      <button
        className="spin-button__btn spin-button__btn--decrement"
        onClick={handleDecrement}
        disabled={isDecrementDisabled}
        type="button"
        aria-label="Decrement value"
      >
        −
      </button>

      <input
        id={inputId}
        type="number"
        role="spinbutton"
        className="spin-button__input"
        value={currentValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        min={min}
        max={max}
        step={step}
        aria-label={!label ? ariaLabel : undefined}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={currentValue}
        aria-describedby={ariaDescribedBy || descriptionId}
        aria-disabled={disabled || undefined}
      />

      <button
        className="spin-button__btn spin-button__btn--increment"
        onClick={handleIncrement}
        disabled={isIncrementDisabled}
        type="button"
        aria-label="Increment value"
      >
        +
      </button>

      {/* SCREEN READER HELPER */}
      <span id={descriptionId} style={{ display: "none" }}>
        Use arrow keys to change value
      </span>
    </div>
  );
}

export default SpinButton;
