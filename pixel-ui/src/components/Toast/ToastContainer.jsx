import Toast from "./Toast";
import "./Toast.css";

function ToastContainer({ toasts, position, onClose }) {
  return (
    <div className={`toast-container toast-container--${position}`}>
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
