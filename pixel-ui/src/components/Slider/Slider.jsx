import { useState, useId } from "react";
import "./Slider.css";

function Slider({
  value,
  defaultValue = 0,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  size = "md",
  showValue = false,
  fullWidth = false,
  label,
  ariaLabel,
  ariaDescribedBy,
  className,
  style,
}) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const currentValue = value !== undefined ? value : internalValue;

  const valueId = useId();

  const handleChange = (e) => {
    const newValue = Number(e.target.value);
    if (value === undefined) setInternalValue(newValue);
    if (onChange) onChange(e);
  };

  const percentage = ((currentValue - min) / (max - min)) * 100;

  return (
    <div
      className={[
        "slider-wrapper",
        `slider-wrapper--${size}`,
        fullWidth ? "slider-wrapper--full-width" : "",
        disabled ? "slider-wrapper--disabled" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {label && <label className="slider__label">{label}</label>}

      <div className="slider__track-container">
        <div className="slider__fill" style={{ width: `${percentage}%` }}></div>

        <input
          type="range"
          className="slider__input"
          value={currentValue}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          onChange={handleChange}
          // Accessibility
          aria-label={!label ? ariaLabel : undefined}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={currentValue}
          aria-valuetext={`${currentValue}`}
          aria-describedby={showValue ? valueId : ariaDescribedBy}
        />
      </div>

      {showValue && (
        <span id={valueId} className="slider__value">
          {currentValue}
        </span>
      )}
    </div>
  );
}

export default Slider;
