import { useState, useId } from "react";
import "./Tooltip.css";

function Tooltip({ children, label, position = "top", className, style }) {
  const [opened, setOpened] = useState(false);
  const tooltipId = useId();

  const trigger = children;

  return (
    <div
      className={["tooltip-wrapper", className].filter(Boolean).join(" ")}
      style={style}
      onMouseEnter={() => setOpened(true)}
      onMouseLeave={() => setOpened(false)}
    >
      {trigger && typeof trigger === "object" && trigger.type
        ? {
            ...trigger,
            props: {
              ...trigger.props,
              "aria-describedby": opened ? tooltipId : undefined,
              onFocus: (e) => {
                setOpened(true);
                trigger.props.onFocus?.(e);
              },
              onBlur: (e) => {
                setOpened(false);
                trigger.props.onBlur?.(e);
              },
            },
          }
        : trigger}

      {opened && (
        <div
          id={tooltipId}
          className={`tooltip tooltip--${position}`}
          role="tooltip"
        >
          {label}
          <span className="tooltip__arrow" />
        </div>
      )}
    </div>
  );
}

export default Tooltip;
