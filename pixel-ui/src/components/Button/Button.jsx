import "./Button.css";

function Button({
  children,
  variant = "filled",
  size = "md",
  color = "primary",
  radius = "default",
  disabled = false,
  loading = false,
  fullWidth = false,
  onClick,
  className,
  style,
}) {
  return (
    <button
      className={[
        "btn",
        `btn--${variant}`,
        `btn--${size}`,
        `btn--${color}`,
        `btn--radius-${radius}`,
        fullWidth ? "btn--full-width" : "",
        loading ? "btn--loading" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}

export default Button;
