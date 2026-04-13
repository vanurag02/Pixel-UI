import { useState } from "react";
import "./index.css";
import { useToast } from "./components/Toast/ToastContext";
import { Search } from "lucide-react";

import useTheme from "./hooks/useTheme";

import { MessageBar } from "./components";

function App() {
  const [bars, setBars] = useState({
    info: true,
    success: true,
    warning: true,
    error: true,
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "24px",
      }}
    >
      {bars.info && (
        <MessageBar
          variant="info"
          title="New update available"
          message="Version 2.0 is ready to install."
          onClose={() => setBars({ ...bars, info: false })}
        />
      )}

      {bars.success && (
        <MessageBar
          variant="success"
          title="Changes saved"
          message="Your profile has been updated successfully."
          onClose={() => setBars({ ...bars, success: false })}
        />
      )}

      {bars.warning && (
        <MessageBar
          variant="warning"
          title="Storage almost full"
          message="You have used 90% of your storage limit."
          onClose={() => setBars({ ...bars, warning: false })}
        />
      )}

      {bars.error && (
        <MessageBar
          variant="error"
          title="Something went wrong"
          message="Please try again or contact support."
          onClose={() => setBars({ ...bars, error: false })}
        />
      )}
    </div>
  );
}

export default App;
