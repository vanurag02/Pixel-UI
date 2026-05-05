import { Children, cloneElement, useId, useRef } from "react";
import "./RadioGroup.css";

function RadioGroup({
  children,
  value,
  defaultValue,
  onChange,
  disabled = false,
  orientation = "vertical",
  size = "md",
  name,
  className,
  style,
}) {
  const groupName = name || useId();
  const itemsRef = useRef([]);

  function handleKeyDown(e, index) {
    const items = itemsRef.current;
    const total = items.length;

    if (["ArrowDown", "ArrowRight"].includes(e.key)) {
      e.preventDefault();
      items[(index + 1) % total]?.focus();
    }

    if (["ArrowUp", "ArrowLeft"].includes(e.key)) {
      e.preventDefault();
      items[(index - 1 + total) % total]?.focus();
    }
  }

  return (
    <div
      className={[
        "radio-group",
        `radio-group--${orientation}`,
        `radio-group--${size}`,
        disabled ? "radio-group--disabled" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
      role="radiogroup"
    >
      {Children.map(children, (child, index) => {
        if (!child) return null;

        const isChecked =
          value !== undefined ? child.props.value === value : undefined;

        return cloneElement(child, {
          ref: (el) => (itemsRef.current[index] = el),
          name: groupName,
          size,
          checked: isChecked,
          defaultChecked:
            defaultValue !== undefined
              ? child.props.value === defaultValue
              : undefined,
          onChange,
          disabled: disabled || child.props.disabled,
          tabIndex: isChecked ? 0 : -1,
          onKeyDown: (e) => handleKeyDown(e, index),
        });
      })}
    </div>
  );
}

export default RadioGroup;
