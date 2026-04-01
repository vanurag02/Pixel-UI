import "./Spinner.css";

function Spinner({ size = "md", color = "primary", className, style }) {
  return (
    <div
      className={["spinner", `spinner--${size}`, `spinner--${color}`, className]
        .filter(Boolean)
        .join(" ")}
      style={style}
      role="status"
      aria-label="Loading"
    />
  );
}

export default Spinner;
