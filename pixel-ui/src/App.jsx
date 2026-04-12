import { useState } from "react";
import "./index.css";
import { useToast } from "./components/Toast/ToastContext";

import { Text, Card, Skeleton } from "./components";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        padding: "24px",
        maxWidth: "400px",
      }}
    >
      {/* Mimicking a card with avatar, title and text */}
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <Skeleton variant="circle" width={40} height={40} />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="40%" />
        </div>
      </div>

      {/* Mimicking an image */}
      <Skeleton variant="rectangle" width="100%" height={200} radius="lg" />

      {/* Mimicking a paragraph */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="90%" />
        <Skeleton variant="text" width="75%" />
      </div>

      {/* Without animation */}
      <Skeleton variant="rectangle" width="100%" height={60} animate={false} />
    </div>
  );
}

export default App;
