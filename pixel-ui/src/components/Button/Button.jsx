import "./Button.css";
import Spinner from "../Spinner/Spinner";

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
  const spinnerColor = variant === "filled" ? "white" : "primary";
  const spinnerSize = size === "lg" ? "md" : "sm";

  return (
    <button
      type="button"
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
      aria-disabled={disabled || loading}
      aria-busy={loading}
      onClick={onClick}
    >
      {loading ? (
        <>
          <Spinner size={spinnerSize} color={spinnerColor} aria-hidden="true" />
          <span aria-live="polite">{children}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
