import "./ProgressBar.css";

function ProgressBar({
  value = 0,
  size = "md",
  color = "primary",
  radius = "pill",
  showValue = false,
  animated = false,
  className,
  style,
}) {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div
      className={[
        "progress-bar",
        `progress-bar--${size}`,
        `progress-bar--radius-${radius}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
      role="progressbar"
      aria-valuenow={clampedValue}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={[
          "progress-bar__fill",
          `progress-bar__fill--${color}`,
          animated ? "progress-bar__fill--animated" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        style={{ width: `${clampedValue}%` }}
      ></div>
      {showValue && (
        <span className="progress-bar__value">{clampedValue}%</span>
      )}
    </div>
  );
}

export default ProgressBar;
