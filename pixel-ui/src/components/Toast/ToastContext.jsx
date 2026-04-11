import { createContext, useContext, useState, useCallback } from "react";
import ToastContainer from "./ToastContainer";

const ToastContext = createContext(null);

export function ToastProvider({ children, position = "bottom-right" }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback(
    ({ message, type = "default", duration = 3000, showClose = true }) => {
      const id = Date.now() + Math.random();
      setToasts((prev) => [
        ...prev,
        { id, message, type, duration, showClose },
      ]);
      if (duration > 0) {
        setTimeout(() => removeToast(id), duration);
      }
    },
    [],
  );

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer
        toasts={toasts}
        position={position}
        onClose={removeToast}
      />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within a ToastProvider");
  return context;
}
