import "./TabPanel.css";

function TabPanel({
  value,
  activeValue,
  id,
  labelledBy,
  children,
  className,
  style,
}) {
  const isActive = value === activeValue;

  return (
    <div
      id={id}
      role="tabpanel"
      aria-labelledby={labelledBy}
      hidden={!isActive}
      tabIndex={isActive ? 0 : -1}
      className={["tab-panel", className].filter(Boolean).join(" ")}
      style={style}
    >
      {children}
    </div>
  );
}

export default TabPanel;
