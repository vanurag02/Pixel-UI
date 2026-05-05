import { useState, useId, cloneElement } from "react";
import "./Tooltip.css";

function Tooltip({ children, label, position = "top", className, style }) {
  const [opened, setOpened] = useState(false);
  const tooltipId = useId();

  const trigger =
    children && typeof children === "object" && children.type
      ? cloneElement(children, {
          "aria-describedby": tooltipId,
          onFocus: (e) => {
            setOpened(true);
            children.props.onFocus?.(e);
          },
          onBlur: (e) => {
            setOpened(false);
            children.props.onBlur?.(e);
          },
          onMouseEnter: (e) => {
            setOpened(true);
            children.props.onMouseEnter?.(e);
          },
          onMouseLeave: (e) => {
            setOpened(false);
            children.props.onMouseLeave?.(e);
          },
        })
      : children;

  return (
    <div
      className={["tooltip-wrapper", className].filter(Boolean).join(" ")}
      style={style}
    >
      {trigger}

      <div
        id={tooltipId}
        className={`tooltip tooltip--${position}`}
        role="tooltip"
        aria-hidden={!opened}
        data-state={opened ? "open" : "closed"}
      >
        {label}
        <span className="tooltip__arrow" />
      </div>
    </div>
  );
}

export default Tooltip;
