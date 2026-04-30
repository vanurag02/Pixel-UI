import { useState, Children, cloneElement, useRef } from "react";
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

  const itemRefs = useRef([]);

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

  const handleKeyDown = (e, index) => {
    const total = itemRefs.current.length;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      itemRefs.current[(index + 1) % total]?.focus();
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      itemRefs.current[(index - 1 + total) % total]?.focus();
    }

    if (e.key === "Home") {
      e.preventDefault();
      itemRefs.current[0]?.focus();
    }

    if (e.key === "End") {
      e.preventDefault();
      itemRefs.current[total - 1]?.focus();
    }
  };

  return (
    <div
      className={["accordion", className].filter(Boolean).join(" ")}
      style={style}
    >
      {Children.map(children, (child, index) => {
        if (!child) return null;

        return cloneElement(child, {
          isOpen: activeItems.includes(child.props.value),
          onToggle: handleToggle,
          headerRef: (el) => (itemRefs.current[index] = el),
          onKeyDown: (e) => handleKeyDown(e, index),
        });
      })}
    </div>
  );
}

export default Accordion;
