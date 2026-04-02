import "./Tag.css";

function Tag({
  children,
  variant = "subtle",
  color = "primary",
  size = "md",
  radius = "default",
  closable = false,
  onClose,
  className,
  style,
}) {
  return (
    <span
      className={[
        "tag",
        `tag--${variant}`,
        `tag--${color}`,
        `tag--${size}`,
        `tag--radius-${radius}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      <span className="tag__text">{children}</span>
      {closable && (
        <button
          className="tag__close"
          onClick={onClose}
          type="button"
          aria-label="Remove"
        >
          ×
        </button>
      )}
    </span>
  );
}

export default Tag;
