import { useEffect, useRef, useState } from "react";
import "./Menu.css";

function Menu({ children, opened = false, onClose, className, style }) {
  const menuRef = useRef(null);
  const itemsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Collect menu items AFTER render
  useEffect(() => {
    if (opened && menuRef.current) {
      itemsRef.current = Array.from(
        menuRef.current.querySelectorAll('[role="menuitem"]:not(:disabled)'),
      );

      if (itemsRef.current.length > 0) {
        itemsRef.current[0].focus();
        setActiveIndex(0);
      }
    }
  }, [opened]);

  // Keyboard navigation
  useEffect(() => {
    function handleKeyDown(e) {
      if (!opened || itemsRef.current.length === 0) return;

      if (e.key === "Escape") {
        onClose?.();
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = (activeIndex + 1) % itemsRef.current.length;
        itemsRef.current[next].focus();
        setActiveIndex(next);
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev =
          (activeIndex - 1 + itemsRef.current.length) % itemsRef.current.length;
        itemsRef.current[prev].focus();
        setActiveIndex(prev);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [opened, activeIndex, onClose]);

  if (!opened) return null;

  return (
    <div
      ref={menuRef}
      className={["menu", className].filter(Boolean).join(" ")}
      style={style}
      role="menu"
    >
      {children}
    </div>
  );
}

export default Menu;
