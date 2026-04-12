import { useState } from "react";
import "./Image.css";

function Image({
  src,
  alt,
  width,
  height,
  radius = "none",
  fit = "cover",
  fallback,
  lazy = true,
  className,
  style,
}) {
  const [error, setError] = useState(false);

  const computedStyle = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    ...style,
  };

  return (
    <img
      src={error && fallback ? fallback : src}
      alt={alt}
      loading={lazy ? "lazy" : "eager"}
      onError={() => setError(true)}
      className={[
        "image",
        `image--radius-${radius}`,
        `image--fit-${fit}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={computedStyle}
    />
  );
}

export default Image;
