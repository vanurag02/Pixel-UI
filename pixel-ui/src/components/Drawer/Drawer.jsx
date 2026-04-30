import { useEffect, useState, useRef } from "react";
import { X } from "lucide-react";
import "./Drawer.css";

function Drawer({
  opened = false,
  onClose,
  position = "right",
  size = "md",
  title,
  closeOnOverlay = true,
  children,
  className,
  style,
}) {
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);

  const drawerRef = useRef(null);

  // Handle open/close animation
  useEffect(() => {
    if (opened) {
      setVisible(true);
      setAnimating(false);
    } else if (visible) {
      setAnimating(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setAnimating(false);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [opened, visible]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  // Move focus inside drawer when opened
  useEffect(() => {
    if (opened && drawerRef.current) {
      drawerRef.current.focus();
    }
  }, [opened]);

  // Keyboard handling (Escape + Focus trap)
  useEffect(() => {
    function handleKeyDown(e) {
      if (!opened) return;

      // Close on Escape
      if (e.key === "Escape") {
        onClose && onClose();
      }

      // Focus trap
      if (e.key === "Tab" && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );

        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [opened, onClose]);

  if (!visible) return null;

  return (
    <div
      className={`drawer__overlay ${animating ? "drawer__overlay--exit" : ""}`}
      onClick={closeOnOverlay ? onClose : undefined}
    >
      <div
        ref={drawerRef}
        tabIndex={-1}
        className={[
          "drawer",
          `drawer--${position}`,
          `drawer--${size}`,
          animating ? `drawer--exit-${position}` : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        style={style}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "drawer-title" : undefined}
        aria-describedby="drawer-content"
      >
        <div className="drawer__header">
          {title && (
            <h2 className="drawer__title" id="drawer-title">
              {title}
            </h2>
          )}
          <button
            className="drawer__close"
            onClick={onClose}
            type="button"
            aria-label="Close drawer"
            autoFocus
          >
            <X size={18} />
          </button>
        </div>

        <div id="drawer-content" className="drawer__content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Drawer;
