import "./Card.css";

function Card({
  children,
  variant = "elevated",
  radius = "default",
  padding = "md",
  shadow = "default",
  fullWidth = false,
  onClick,
  className,
  style,
}) {
  return (
    <div
      className={[
        "card",
        `card--${variant}`,
        `card--radius-${radius}`,
        `card--padding-${padding}`,
        `card--shadow-${shadow}`,
        fullWidth ? "card--full-width" : "",
        onClick ? "card--clickable" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}

export default Card;
