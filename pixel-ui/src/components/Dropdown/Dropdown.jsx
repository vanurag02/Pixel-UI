import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import "./Dropdown.css";

function Dropdown({
  label,
  children,
  variant = "outline",
  size = "md",
  disabled = false,
  className,
  style,
}) {
  const [opened, setOpened] = useState(false);

  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);

  const menuId = "dropdown-menu";

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpened(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard handling
  function handleKeyDown(e) {
    if (disabled) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpened(true);

      setTimeout(() => {
        const firstItem = menuRef.current?.querySelector('[role="menuitem"]');
        firstItem?.focus();
      }, 0);
    }

    if (e.key === "Escape") {
      setOpened(false);
      triggerRef.current?.focus();
    }
  }

  function handleMenuKeyDown(e) {
    const items = menuRef.current?.querySelectorAll(
      '[role="menuitem"]:not(:disabled)',
    );
    if (!items || items.length === 0) return;

    const currentIndex = Array.from(items).indexOf(document.activeElement);

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % items.length;
      items[nextIndex].focus();
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      items[prevIndex].focus();
    }

    if (e.key === "Home") {
      e.preventDefault();
      items[0].focus();
    }

    if (e.key === "End") {
      e.preventDefault();
      items[items.length - 1].focus();
    }

    if (e.key === "Escape") {
      e.preventDefault();
      setOpened(false);
      triggerRef.current?.focus();
    }
  }

  return (
    <div
      className={["dropdown", className].filter(Boolean).join(" ")}
      style={style}
      ref={dropdownRef}
    >
      <button
        ref={triggerRef}
        className={[
          "dropdown__trigger",
          `dropdown__trigger--${variant}`,
          `dropdown__trigger--${size}`,
          disabled ? "dropdown__trigger--disabled" : "",
          opened ? "dropdown__trigger--active" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        onClick={() => !disabled && setOpened((prev) => !prev)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        type="button"
        aria-haspopup="menu"
        aria-expanded={opened}
        aria-controls={menuId}
      >
        <span>{label}</span>

        <ChevronDown
          size={16}
          className={`dropdown__arrow ${opened ? "dropdown__arrow--up" : ""}`}
        />
      </button>

      {opened && (
        <div
          className="dropdown__menu"
          role="menu"
          id={menuId}
          ref={menuRef}
          onKeyDown={handleMenuKeyDown} // ADD THIS
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
