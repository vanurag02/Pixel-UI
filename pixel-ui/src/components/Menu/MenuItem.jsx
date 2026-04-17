import "./Menu.css";

function MenuItem({
  children,
  onClick,
  disabled = false,
  color = "default",
  leftSection,
}) {
  return (
    <button
      className={[
        "menu-item",
        `menu-item--${color}`,
        disabled ? "menu-item--disabled" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={onClick}
      disabled={disabled}
      role="menuitem"
      type="button"
      tabIndex={-1}
    >
      {leftSection && <span className="menu-item__left">{leftSection}</span>}
      <span className="menu-item__text">{children}</span>
    </button>
  );
}

export default MenuItem;
