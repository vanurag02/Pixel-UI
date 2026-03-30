import "./Divider.css";

function Divider({ orientation = "horizontal", inset = false, children }) {
  const isDecorative = !children;

  return (
    <div
      className={[
        "divider",
        `divider--${orientation}`,
        inset ? "divider--inset" : "",
        children ? "divider--with-text" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      role={isDecorative ? "separator" : undefined}
      aria-hidden={isDecorative ? "true" : undefined}
      aria-orientation={orientation}
    >
      {children && <span className="divider__text">{children}</span>}
    </div>
  );
}

export default Divider;
