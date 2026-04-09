import "./Tooltip.css";

function Tooltip({ children, label, position = "top", className, style }) {
  return (
    <div
      className={["tooltip-wrapper", className].filter(Boolean).join(" ")}
      style={style}
    >
      {children}
      <div className={`tooltip tooltip--${position}`} role="tooltip">
        {label}
        <span className="tooltip__arrow" />
      </div>
    </div>
  );
}

export default Tooltip;
