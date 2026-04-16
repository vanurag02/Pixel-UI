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

  // Generate safe base ID
  const baseId =
    child.props.id ||
    (label ? label.toLowerCase().replace(/[^a-z0-9]+/g, "-") : "field");

  const inputId = baseId;
  const messageId = `${baseId}-message`;

  const enhancedChild = cloneElement(child, {
    id: inputId,
    error: !!error,
    required,
    "aria-describedby": error || description ? messageId : undefined,
  });

  return (
    <div
      className={["field", className].filter(Boolean).join(" ")}
      style={style}
    >
      {label && (
        <Label htmlFor={inputId} size={size} required={required}>
          {label}
        </Label>
      )}

      <div className="field__input">{enhancedChild}</div>

      {(error || description) && (
        <span
          id={messageId}
          className={[
            "field__message",
            error ? "field__message--error" : "field__message--description",
            `field__message--${size}`,
          ].join(" ")}
          role={error ? "alert" : undefined}
          aria-live={error ? "assertive" : "polite"}
        >
          {error || description}
        </span>
      )}
    </div>
  );
}

export default Field;
