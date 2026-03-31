import "./Badge.css";

function Badge({
  children,
  variant = "filled",
  color = "primary",
  size = "md",
  radius = "pill",
  className,
  style,
}) {
  return (
    <span
      className={[
        "badge",
        `badge--${variant}`,
        `badge--${color}`,
        `badge--${size}`,
        `badge--radius-${radius}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {children}
    </span>
  );
}

export default Badge;
