import "./Menu.css";

function Menu({ children, opened = false, onClose, className, style }) {
  if (!opened) return null;

  return (
    <>
      <div className="menu__overlay" onClick={onClose} />
      <div
        className={["menu", className].filter(Boolean).join(" ")}
        style={style}
        role="menu"
      >
        {children}
      </div>
    </>
  );
}

function MenuHeader({ children, className, style }) {
  return (
    <div
      className={["menu-header", className].filter(Boolean).join(" ")}
      style={style}
    >
      {children}
    </div>
  );
}

function MenuFooter({ children, className, style }) {
  return (
    <div
      className={["menu-footer", className].filter(Boolean).join(" ")}
      style={style}
    >
      {children}
    </div>
  );
}

Menu.Header = MenuHeader;
Menu.Footer = MenuFooter;

export default Menu;
