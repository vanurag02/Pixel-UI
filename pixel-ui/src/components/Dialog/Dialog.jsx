import { useEffect, useRef, useId } from "react";
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
  const dialogRef = useRef(null);
  const previouslyFocusedRef = useRef(null);

  const titleId = useId();
  const contentId = useId();

  // Scroll lock
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

  // Focus management
  useEffect(() => {
    if (opened) {
      previouslyFocusedRef.current = document.activeElement;

      const focusable = dialogRef.current?.querySelector(
        'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])',
      );

      focusable?.focus();
    } else {
      previouslyFocusedRef.current?.focus();
    }
  }, [opened]);

  // Keyboard + focus trap
  useEffect(() => {
    function handleKeyDown(e) {
      if (!opened) return;

      if (e.key === "Escape") {
        onClose?.();
      }

      if (e.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll(
          'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])',
        );

        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [opened, onClose]);

  if (!opened) return null;

  return (
    <div
      className="dialog__overlay"
      onClick={closeOnOverlay ? () => onClose?.() : undefined}
    >
      <div
        ref={dialogRef}
        className={["dialog", `dialog--${size}`, className]
          .filter(Boolean)
          .join(" ")}
        style={style}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={contentId}
      >
        <div className="dialog__header">
          {title && (
            <h2 id={titleId} className="dialog__title">
              {title}
            </h2>
          )}

          <button
            className="dialog__close"
            onClick={() => onClose?.()}
            type="button"
            aria-label="Close dialog"
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

/* Subcomponents remain same */
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
