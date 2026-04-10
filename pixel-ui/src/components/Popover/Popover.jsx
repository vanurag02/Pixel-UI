import { useRef, useEffect } from "react";
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

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        if (onClose) onClose();
      }
    }
    if (opened) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [opened, onClose]);

  return (
    <div className="popover-wrapper" ref={wrapperRef}>
      {trigger}
      {opened && (
        <div
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
