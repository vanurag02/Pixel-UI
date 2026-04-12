import { useState, Children, cloneElement } from "react";
import "./Accordion.css";

function Accordion({
  children,
  multiple = false,
  defaultValue,
  className,
  style,
}) {
  const [activeItems, setActiveItems] = useState(
    defaultValue
      ? Array.isArray(defaultValue)
        ? defaultValue
        : [defaultValue]
      : [],
  );

  const handleToggle = (value) => {
    if (multiple) {
      setActiveItems((prev) =>
        prev.includes(value)
          ? prev.filter((v) => v !== value)
          : [...prev, value],
      );
    } else {
      setActiveItems((prev) => (prev.includes(value) ? [] : [value]));
    }
  };

  return (
    <div
      className={["accordion", className].filter(Boolean).join(" ")}
      style={style}
    >
      {Children.map(children, (child) => {
        if (!child) return null;
        return cloneElement(child, {
          isOpen: activeItems.includes(child.props.value),
          onToggle: handleToggle,
        });
      })}
    </div>
  );
}

export default Accordion;
