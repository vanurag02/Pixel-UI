import "./Skeleton.css";

function Skeleton({
  variant = "rectangle",
  width = "100%",
  height = "16px",
  radius = "default",
  animate = true,
  className,
  style,
}) {
  const computedStyle = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    ...style,
  };

  return (
    <div
      className={[
        "skeleton",
        `skeleton--${variant}`,
        variant !== "circle" ? `skeleton--radius-${radius}` : "",
        animate ? "skeleton--animate" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={computedStyle}
    />
  );
}

export default Skeleton;
