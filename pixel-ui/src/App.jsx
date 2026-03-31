import { useState } from "react";
import "./index.css";
import Text from "./components/Text/Text";
import Label from "./components/Label/Label";
import Divider from "./components/Divider/Divider";
import Button from "./components/Button/Button";
import Badge from "./components/Badge/Badge";
import Checkbox from "./components/Checkbox/Checkbox";
import Input from "./components/Input/Input";
import Textarea from "./components/Textarea/Textarea";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "24px",
        maxWidth: "400px",
      }}
    >
      {/* Default */}
      <Textarea placeholder="Enter your message..." />

      {/* Filled */}
      <Textarea variant="filled" placeholder="Filled textarea" />

      {/* Sizes */}
      <Textarea size="sm" placeholder="Small" />
      <Textarea size="lg" placeholder="Large" />

      {/* Rows */}
      <Textarea rows={8} placeholder="Tall textarea" />

      {/* Resize options */}
      <Textarea resize="none" placeholder="Not resizable" />

      {/* Error */}
      <Textarea error placeholder="Invalid input" />

      {/* Disabled */}
      <Textarea disabled placeholder="Disabled" />

      {/* Full width */}
      <Textarea fullWidth placeholder="Full width" />
    </div>
  );
}

export default App;
