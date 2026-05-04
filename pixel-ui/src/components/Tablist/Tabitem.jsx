function TabItem({
  children,
  value,
  active = false,
  disabled = false,
  variant,
  size,
  onClick,
  id,
  controls,
  onKeyDown,
}) {
  return (
    <button
      id={id}
      role="tab"
      aria-selected={active}
      aria-controls={controls}
      tabIndex={active ? 0 : -1}
      disabled={disabled}
      onClick={onClick}
      onKeyDown={onKeyDown}
      type="button"
      className={[
        "tab-item",
        `tab-item--${variant}`,
        `tab-item--${size}`,
        active ? "tab-item--active" : "",
        disabled ? "tab-item--disabled" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
}

export default TabItem;
