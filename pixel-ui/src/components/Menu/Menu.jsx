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

export default Menu;
