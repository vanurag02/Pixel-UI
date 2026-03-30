import "./Text.css";

function Text({
  children,
  as: Element = "p",
  size = "lg",
  weight = "regular",
  color = "primary",
  align = "left",
}) {
  return (
    <Element
      className={`text text--${size} text--${weight} text--${color} text--${align}`}
    >
      {children}
    </Element>
  );
}

export default Text;
