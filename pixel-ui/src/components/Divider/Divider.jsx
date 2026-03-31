import "./Divider.css";

function Divider({
  orientation = "horizontal",
  inset = false,
  children,
  className,
  style,
}) {
  const isDecorative = !children;

  return (
    <div
      className={[
        "divider",
        `divider--${orientation}`,
        inset ? "divider--inset" : "",
        children ? "divider--with-text" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
      role={isDecorative ? "separator" : undefined}
      aria-hidden={isDecorative ? "true" : undefined}
      aria-orientation={orientation}
    >
      {children && <span className="divider__text">{children}</span>}
    </div>
  );
}

export default Divider;
