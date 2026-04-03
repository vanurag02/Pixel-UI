import "./Dropdown.css";

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
    >
      {children}
    </button>
  );
}

export default DropdownItem;
