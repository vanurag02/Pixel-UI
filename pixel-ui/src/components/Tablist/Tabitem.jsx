import "./Tablist.css";

function TabItem({
  children,
  value,
  active = false,
  disabled = false,
  variant,
  size,
  onClick,
}) {
  return (
    <button
      className={[
        "tab-item",
        `tab-item--${variant}`,
        `tab-item--${size}`,
        active ? "tab-item--active" : "",
        disabled ? "tab-item--disabled" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      role="tab"
      aria-selected={active}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

export default TabItem;
