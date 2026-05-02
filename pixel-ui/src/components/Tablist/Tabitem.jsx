import { Children, cloneElement, useState, useRef } from "react";

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

  const handleChange = (val) => {
    if (value === undefined) setInternalValue(val);
    onChange?.(val);
  };

  const handleKeyDown = (e, index, tabs) => {
    const count = tabs.length;

    if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = (index + 1) % count;
      tabsRef.current[next]?.focus();
      handleChange(tabs[next].props.value);
    }

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = (index - 1 + count) % count;
      tabsRef.current[prev]?.focus();
      handleChange(tabs[prev].props.value);
    }

    if (e.key === "Home") {
      e.preventDefault();
      tabsRef.current[0]?.focus();
      handleChange(tabs[0].props.value);
    }

    if (e.key === "End") {
      e.preventDefault();
      const last = count - 1;
      tabsRef.current[last]?.focus();
      handleChange(tabs[last].props.value);
    }
  };

  const tabsArray = Children.toArray(children);

  return (
    <div
      role="TabList"
      className={[
        "TabList",
        `TabList--${variant}`,
        `TabList--${size}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {tabsArray.map((child, index) => {
        if (!child) return null;

        const isActive = child.props.value === activeValue;

        const tabId = `tab-${child.props.value}`;
        const panelId = `panel-${child.props.value}`;

        return cloneElement(child, {
          ref: (el) => (tabsRef.current[index] = el),
          active: isActive,
          variant,
          size,
          id: tabId,
          controls: panelId,
          onClick: () =>
            !child.props.disabled && handleChange(child.props.value),
          onKeyDown: (e) => handleKeyDown(e, index, tabsArray),
        });
      })}
    </div>
  );
}
