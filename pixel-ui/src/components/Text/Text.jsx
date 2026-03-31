import "./Text.css";

function Text({
  children,
  as: Element = "p",
  size = "lg",
  weight = "regular",
  color = "primary",
  align = "left",
  className,
  style,
}) {
  return (
    <Element
      className={[
        "text",
        `text--${size}`,
        `text--${weight}`,
        `text--${color}`,
        `text--${align}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {children}
    </Element>
  );
}

export default Text;
