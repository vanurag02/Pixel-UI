import { useEffect, useState, useRef } from "react";
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
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);

  const dialogRef = useRef(null);

  // Unique ids (important if multiple dialogs exist)
  const titleId = title ? `dialog-title-${Math.random()}` : undefined;
  const contentId = `dialog-content-${Math.random()}`;

  // Animation handling
  useEffect(() => {
    if (opened) {
      setVisible(true);
      setAnimating(false);
    } else if (visible) {
      setAnimating(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setAnimating(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [opened, visible]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  // Focus on open
  useEffect(() => {
    if (opened && dialogRef.current) {
      dialogRef.current.focus();
    }
  }, [opened]);

  // Keyboard handling + focus trap
  useEffect(() => {
    function handleKeyDown(e) {
      if (!opened) return;

      // Escape
      if (e.key === "Escape") {
        onClose && onClose();
      }

      // Focus trap
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll(
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
      className={`dialog__overlay ${animating ? "dialog__overlay--exit" : ""}`}
      onClick={closeOnOverlay ? onClose : undefined}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        className={[
          "dialog",
          `dialog--${size}`,
          animating ? "dialog--exit" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        style={style}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={contentId}
      >
        <div className="dialog__header">
          {title && (
            <h2 className="dialog__title" id={titleId}>
              {title}
            </h2>
          )}
          <button
            className="dialog__close"
            onClick={onClose}
            type="button"
            aria-label="Close dialog"
            autoFocus
          >
            <X size={18} />
          </button>
        </div>

        <div id={contentId} className="dialog__content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Dialog;
