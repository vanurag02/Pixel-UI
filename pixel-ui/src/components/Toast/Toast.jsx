import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react";
import "./Toast.css";

const icons = {
  success: <CheckCircle size={18} />,
  error: <AlertCircle size={18} />,
  warning: <AlertTriangle size={18} />,
  info: <Info size={18} />,
  default: null,
};

function Toast({ message, type = "default", showClose = true, onClose }) {
  return (
    <div className={`toast toast--${type}`}>
      {icons[type] && <span className="toast__icon">{icons[type]}</span>}
      <span className="toast__message">{message}</span>
      {showClose && (
        <button
          className="toast__close"
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

export default Toast;
