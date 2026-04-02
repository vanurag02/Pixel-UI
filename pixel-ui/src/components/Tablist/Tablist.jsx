import { Children, cloneElement, useState } from "react";
import "./Tablist.css";

function Tablist({
  children,
  value,
  defaultValue,
  onChange,
  variant = "default",
  size = "md",
  className,
  style,
}) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const activeValue = value !== undefined ? value : internalValue;

  const handleChange = (val) => {
    if (value === undefined) setInternalValue(val);
    if (onChange) onChange(val);
  };

  return (
    <div
      className={[
        "tablist",
        `tablist--${variant}`,
        `tablist--${size}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
      role="tablist"
    >
      {Children.map(children, (child) => {
        if (!child) return null;
        return cloneElement(child, {
          active: child.props.value === activeValue,
          variant,
          size,
          onClick: () =>
            !child.props.disabled && handleChange(child.props.value),
        });
      })}
    </div>
  );
}

export default Tablist;
