import { Children, cloneElement } from "react";
import Label from "../Label/Label";
import "./Field.css";

function Field({
  children,
  label,
  required = false,
  error,
  description,
  size = "md",
  className,
  style,
}) {
  const child = Children.only(children);
  const enhancedChild = cloneElement(child, {
    error: !!error,
    id: child.props.id || label?.toLowerCase().replace(/\s+/g, "-"),
  });

  return (
    <div
      className={["field", className].filter(Boolean).join(" ")}
      style={style}
    >
      {label && (
        <Label
          htmlFor={child.props.id || label?.toLowerCase().replace(/\s+/g, "-")}
          size={size}
          required={required}
        >
          {label}
        </Label>
      )}

      <div className="field__input">{enhancedChild}</div>

      {error ? (
        <span
          className={`field__message field__message--error field__message--${size}`}
        >
          {error}
        </span>
      ) : description ? (
        <span
          className={`field__message field__message--description field__message--${size}`}
        >
          {description}
        </span>
      ) : null}
    </div>
  );
}

export default Field;
