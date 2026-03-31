import { Children, cloneElement } from "react";
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
      {Children.map(children, (child) => {
        if (!child) return null;
        return cloneElement(child, {
          name,
          size,
          checked:
            value !== undefined ? child.props.value === value : undefined,
          defaultChecked:
            defaultValue !== undefined
              ? child.props.value === defaultValue
              : undefined,
          onChange,
          disabled: disabled || child.props.disabled,
        });
      })}
    </div>
  );
}

export default RadioGroup;
