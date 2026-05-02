import { Children, cloneElement, useState, useRef, useId } from "react";
import "./TabList.css";

function TabList({
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

  const tabsRef = useRef([]);
  const baseId = useId();

  const handleChange = (val) => {
    if (value === undefined) setInternalValue(val);
    if (onChange) onChange(val);
  };

  function handleKeyDown(e, index) {
    const tabs = tabsRef.current;
    const total = tabs.length;

    if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = (index + 1) % total;
      tabs[next]?.focus();
      handleChange(tabs[next].dataset.value);
    }

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = (index - 1 + total) % total;
      tabs[prev]?.focus();
      handleChange(tabs[prev].dataset.value);
    }

    if (e.key === "Home") {
      e.preventDefault();
      tabs[0]?.focus();
      handleChange(tabs[0].dataset.value);
    }

    if (e.key === "End") {
      e.preventDefault();
      tabs[total - 1]?.focus();
      handleChange(tabs[total - 1].dataset.value);
    }
  }

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
      {Children.map(children, (child, index) => {
        if (!child) return null;

        const isActive = child.props.value === activeValue;
        const tabId = `${baseId}-tab-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return cloneElement(child, {
          ref: (el) => (tabsRef.current[index] = el),
          id: tabId,
          panelId,
          active: isActive,
          variant,
          size,
          tabIndex: isActive ? 0 : -1,
          "data-value": child.props.value,
          onClick: () =>
            !child.props.disabled && handleChange(child.props.value),
          onKeyDown: (e) => handleKeyDown(e, index),
        });
      })}
    </div>
  );
}

export default TabList;
