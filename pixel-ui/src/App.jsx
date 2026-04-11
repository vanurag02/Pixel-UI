import { useState } from "react";
import "./index.css";
import Button from "./components/Button/Button";

import { useToast } from "./components/Toast/ToastContext";

function App() {
  const { addToast } = useToast();

  return (
    <div
      style={{ display: "flex", gap: "8px", padding: "24px", flexWrap: "wrap" }}
    >
      <Button onClick={() => addToast({ message: "Action completed!" })}>
        Default
      </Button>
      <Button
        color="success"
        onClick={() =>
          addToast({ message: "Saved successfully!", type: "success" })
        }
      >
        Success
      </Button>
      <Button
        color="error"
        onClick={() =>
          addToast({ message: "Something went wrong.", type: "error" })
        }
      >
        Error
      </Button>
      <Button
        onClick={() =>
          addToast({ message: "Please review your input.", type: "warning" })
        }
      >
        Warning
      </Button>
      <Button
        onClick={() =>
          addToast({ message: "New update available.", type: "info" })
        }
      >
        Info
      </Button>
      <Button
        onClick={() =>
          addToast({ message: "This stays until closed.", duration: 0 })
        }
      >
        No auto-dismiss
      </Button>
    </div>
  );
}

export default App;
