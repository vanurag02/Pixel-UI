import { Info, CheckCircle, AlertTriangle, XCircle, X } from "lucide-react";
import "./MessageBar.css";

const icons = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  error: XCircle,
};

function MessageBar({
  variant = "info",
  title,
  message,
  closable = true,
  onClose,
  icon = true,
  children,
  className,
  style,
}) {
  const IconComponent = icons[variant];

  return (
    <div
      className={["message-bar", `message-bar--${variant}`, className]
        .filter(Boolean)
        .join(" ")}
      style={style}
      role="alert"
    >
      {icon && (
        <span className="message-bar__icon">
          <IconComponent size={18} />
        </span>
      )}

      <div className="message-bar__body">
        {title && <span className="message-bar__title">{title}</span>}
        {message && <span className="message-bar__message">{message}</span>}
        {children}
      </div>

      {closable && (
        <button
          className="message-bar__close"
          onClick={onClose}
          type="button"
          aria-label="Close"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}

export default MessageBar;
