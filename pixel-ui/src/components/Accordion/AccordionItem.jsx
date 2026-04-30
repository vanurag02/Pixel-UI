import { ChevronDown } from "lucide-react";
import "./Accordion.css";

function AccordionItem({
  value,
  label,
  children,
  isOpen = false,
  onToggle,
  disabled = false,
  headerRef,
  onKeyDown,
  className,
  style,
}) {
  const buttonId = `accordion-header-${value}`;
  const panelId = `accordion-panel-${value}`;

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
        ref={headerRef}
        id={buttonId}
        className="accordion-item__header"
        onClick={() => !disabled && onToggle(value)}
        onKeyDown={onKeyDown}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        disabled={disabled}
      >
        <span className="accordion-item__label">{label}</span>
        <ChevronDown
          size={18}
          className={`accordion-item__icon ${
            isOpen ? "accordion-item__icon--open" : ""
          }`}
        />
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`accordion-item__panel ${
          isOpen ? "accordion-item__panel--open" : ""
        }`}
      >
        <div className="accordion-item__content">{children}</div>
      </div>
    </div>
  );
}

export default AccordionItem;
