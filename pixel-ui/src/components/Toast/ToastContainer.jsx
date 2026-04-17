import Toast from "./Toast";
import "./Toast.css";

function ToastContainer({ toasts, position, onClose }) {
  return (
    <div
      className={`toast-container toast-container--${position}`}
      aria-live="polite"
      aria-relevant="additions removals"
    >
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          showClose={toast.showClose}
          onClose={() => onClose(toast.id)}
        />
      ))}
    </div>
  );
}

export default ToastContainer;
