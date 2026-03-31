import "./Label.css";

function Label({
  children,
  htmlFor,
  size = "md",
  required = false,
  className,
  style,
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={["label", `label--${size}`, className]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {children}
      {required && <span className="label__required">*</span>}
    </label>
  );
}

export default Label;
