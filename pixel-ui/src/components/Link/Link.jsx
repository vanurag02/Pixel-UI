import "./Link.css";

function Link({
  children,
  href,
  target = "_self",
  size = "md",
  color = "primary",
  underline = "hover",
  className,
  style,
}) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer noopener" : undefined}
      className={[
        "link",
        `link--${size}`,
        `link--${color}`,
        `link--underline-${underline}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {children}
    </a>
  );
}

export default Link;
