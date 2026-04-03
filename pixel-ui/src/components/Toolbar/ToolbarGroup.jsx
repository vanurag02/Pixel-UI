import "./Toolbar.css";

function ToolbarGroup({ children, className, style }) {
  return (
    <div
      className={["toolbar-group", className].filter(Boolean).join(" ")}
      style={style}
    >
      {children}
    </div>
  );
}

export default ToolbarGroup;
