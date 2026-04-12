import { ChevronDown } from "lucide-react";
import "./Accordion.css";

function AccordionItem({
  value,
  label,
  children,
  isOpen = false,
  onToggle,
  disabled = false,
  className,
  style,
}) {
  return (
    <div
      className={[
        "accordion-item",
        isOpen ? "accordion-item--open" : "",
        disabled ? "accordion-item--disabled" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      <button
        className="accordion-item__header"
        onClick={() => !disabled && onToggle(value)}
        type="button"
        aria-expanded={isOpen}
        disabled={disabled}
      >
        <span className="accordion-item__label">{label}</span>
        <ChevronDown
          size={18}
          className={`accordion-item__icon ${isOpen ? "accordion-item__icon--open" : ""}`}
        />
      </button>

      <div
        className={`accordion-item__panel ${isOpen ? "accordion-item__panel--open" : ""}`}
      >
        <div className="accordion-item__content">{children}</div>
      </div>
    </div>
  );
}

export default AccordionItem;
