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
    const tabs = tabsRef.current.filter(Boolean);
    const total = tabs.length;

    if (!total) return;

    if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) {
      e.preventDefault();
    }

    let nextIndex = index;

    if (e.key === "ArrowRight") nextIndex = (index + 1) % total;
    if (e.key === "ArrowLeft") nextIndex = (index - 1 + total) % total;
    if (e.key === "Home") nextIndex = 0;
    if (e.key === "End") nextIndex = total - 1;

    if (nextIndex !== index) {
      tabs[nextIndex]?.focus();
      handleChange(tabs[nextIndex].dataset.value);
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
        if (!child || !child.props?.value) return null;

        const isActive = child.props.value === activeValue;
        const tabId = `${baseId}-tab-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return cloneElement(child, {
          ref: (el) => (tabsRef.current[index] = el),
          id: tabId,
          controls: panelId,
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
