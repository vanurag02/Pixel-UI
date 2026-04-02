import { Children } from "react";
import "./Breadcrumb.css";

function Breadcrumb({
  children,
  separator = "/",
  size = "md",
  className,
  style,
}) {
  const items = Children.toArray(children);

  return (
    <nav
      className={["breadcrumb", `breadcrumb--${size}`, className]
        .filter(Boolean)
        .join(" ")}
      style={style}
      aria-label="Breadcrumb"
    >
      <ol className="breadcrumb__list">
        {items.map((item, index) => (
          <li key={index} className="breadcrumb__item">
            {item}
            {index < items.length - 1 && (
              <span className="breadcrumb__separator">{separator}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
