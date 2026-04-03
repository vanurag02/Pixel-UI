import "./Toolbar.css";

function Toolbar({
  children,
  size = "md",
  variant = "default",
  className,
  style,
}) {
  return (
    <div
      className={[
        "toolbar",
        `toolbar--${size}`,
        `toolbar--${variant}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
      role="toolbar"
    >
      {children}
    </div>
  );
}

export default Toolbar;
