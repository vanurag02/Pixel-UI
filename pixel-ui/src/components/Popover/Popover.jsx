import { useRef, useEffect, useId, cloneElement } from "react";
import "./Popover.css";

function Popover({
  trigger,
  children,
  position = "bottom",
  opened = false,
  onClose,
  width = "200px",
  className,
  style,
}) {
  const wrapperRef = useRef(null);
  const popoverRef = useRef(null);
  const triggerRef = useRef(null);
  const popoverId = useId();

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        if (onClose) {
          onClose();
          triggerRef.current?.focus();
        }
      }
    }

    if (opened) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [opened, onClose]);

  // Keyboard handling
  useEffect(() => {
    function handleKeyDown(e) {
      if (!opened) return;

      if (e.key === "Escape") {
        if (onClose) onClose();
        triggerRef.current?.focus();
      }

      // Close on Tab (no focus trap)
      if (e.key === "Tab") {
        if (onClose) onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [opened, onClose]);

  // Focus when opened
  useEffect(() => {
    if (opened) {
      popoverRef.current?.focus();
    }
  }, [opened]);

  // Enhance trigger
  const enhancedTrigger = cloneElement(trigger, {
    ref: triggerRef,
    "aria-haspopup": "dialog",
    "aria-expanded": opened,
    "aria-controls": popoverId,
    onKeyDown: (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        trigger.props.onClick?.(e);
      }
    },
  });

  return (
    <div className="popover-wrapper" ref={wrapperRef}>
      {enhancedTrigger}

      {opened && (
        <div
          id={popoverId}
          ref={popoverRef}
          role="dialog"
          aria-modal="false"
          tabIndex={-1}
          className={["popover", `popover--${position}`, className]
            .filter(Boolean)
            .join(" ")}
          style={{ width, ...style }}
        >
          <span className="popover__arrow" />

          <div className="popover__content">{children}</div>
        </div>
      )}
    </div>
  );
}

export default Popover;
