import { useEffect, useState, useRef, useId } from "react";
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
  const lastFocusedRef = useRef(null);

  const titleId = title ? useId() : undefined;
  const contentId = useId();

  // ANIMATION HANDLING
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

  // SCROLL LOCK
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  // STORE LAST FOCUSED ELEMENT + FOCUS DIALOG
  useEffect(() => {
    if (opened) {
      lastFocusedRef.current = document.activeElement;
      dialogRef.current?.focus();
    } else {
      lastFocusedRef.current?.focus();
    }
  }, [opened]);

  // KEYBOARD HANDLING + FOCUS TRAP
  useEffect(() => {
    function handleKeyDown(e) {
      if (!opened) return;

      if (e.key === "Escape") {
        onClose && onClose();
      }

      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll(
          'button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])',
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
