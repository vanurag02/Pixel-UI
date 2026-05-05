import { forwardRef } from "react";

const TabItem = forwardRef(function TabItem(
  {
    children,
    value,
    active = false,
    disabled = false,
    variant,
    size,
    onClick,
    id,
    controls,
    onKeyDown,
    tabIndex,
    ...rest
  },
  ref,
) {
  return (
    <button
      ref={ref} // ✅ CRITICAL FIX
      id={id}
      role="tab"
      aria-selected={active}
      aria-controls={controls}
      aria-disabled={disabled}
      tabIndex={tabIndex}
      disabled={disabled}
      onClick={onClick}
      onKeyDown={onKeyDown}
      type="button"
      className={[
        "tab-item",
        `tab-item--${variant}`,
        `tab-item--${size}`,
        active ? "tab-item--active" : "",
        disabled ? "tab-item--disabled" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
});

export default TabItem;
