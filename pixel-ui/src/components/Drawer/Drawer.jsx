import { useEffect } from "react";
import { X } from "lucide-react";
import "./Drawer.css";

function Drawer({
  opened = false,
  onClose,
  title,
  position = "right",
  size = "md",
  closeOnOverlay = true,
  children,
  className,
  style,
}) {
  useEffect(() => {
    if (opened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape" && opened) {
        if (onClose) onClose();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [opened, onClose]);

  if (!opened) return null;

  return (
    <div
      className="drawer__overlay"
      onClick={closeOnOverlay ? onClose : undefined}
    >
      <div
        className={[
          "drawer",
          `drawer--${position}`,
          `drawer--${size}`,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        style={style}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="drawer__header">
          {title && <h2 className="drawer__title">{title}</h2>}
          <button
            className="drawer__close"
            onClick={onClose}
            type="button"
            aria-label="Close drawer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="drawer__content">{children}</div>
      </div>
    </div>
  );
}

export default Drawer;
