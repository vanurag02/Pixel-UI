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
      {loading ? (
        <>
          <Spinner size={spinnerSize} color={spinnerColor} />
          <span>{children}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
