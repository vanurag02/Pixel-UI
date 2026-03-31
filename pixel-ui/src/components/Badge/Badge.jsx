import "./Badge.css";

function Badge({
  children,
  variant = "filled",
  color = "primary",
  size = "md",
  radius = "pill",
}) {
  return (
    <span
      className={[
        "badge",
        `badge--${variant}`,
        `badge--${color}`,
        `badge--${size}`,
        `badge--radius-${radius}`,
      ].join(" ")}
    >
      {children}
    </span>
  );
}

export default Badge;
