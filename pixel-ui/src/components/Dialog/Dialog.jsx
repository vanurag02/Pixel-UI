import { useEffect } from "react";
import { X } from "lucide-react";
import "./Dialog.css";

function Dialog({
  opened = false,
  onClose,
  title,
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
      className="dialog__overlay"
      onClick={closeOnOverlay ? onClose : undefined}
    >
      <div
        className={["dialog", `dialog--${size}`, className]
          .filter(Boolean)
          .join(" ")}
        style={style}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "dialog-title" : undefined}
      >
        <div className="dialog__header">
          {title && (
            <h2 className="dialog__title" id="dialog-title">
              {title}
            </h2>
          )}
          <button
            className="dialog__close"
            onClick={onClose}
            type="button"
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>
        </div>
        <div className="dialog__content">{children}</div>
      </div>
    </div>
  );
}

function DialogHeader({ children, className, style }) {
  return (
    <div
      className={["dialog-header", className].filter(Boolean).join(" ")}
      style={style}
    >
      {children}
    </div>
  );
}

function DialogContent({ children, className, style }) {
  return (
    <div
      className={["dialog-content", className].filter(Boolean).join(" ")}
      style={style}
    >
      {children}
    </div>
  );
}

function DialogActions({ children, className, style }) {
  return (
    <div
      className={["dialog-actions", className].filter(Boolean).join(" ")}
      style={style}
    >
      {children}
    </div>
  );
}

Dialog.Header = DialogHeader;
Dialog.Content = DialogContent;
Dialog.Actions = DialogActions;

export default Dialog;
