function DropdownItem({ children, onClick, disabled = false }) {
  return (
    <button
      className={["dropdown-item", disabled ? "dropdown-item--disabled" : ""]
        .filter(Boolean)
        .join(" ")}
      onClick={onClick}
      disabled={disabled}
      type="button"
      role="menuitem"
      tabIndex={-1}
      aria-disabled={disabled} // FIX
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (!disabled && onClick) onClick(e);
        }
      }}
    >
      {children}
    </button>
  );
}
export default DropdownItem;
