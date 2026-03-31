import { useState } from "react";
import "./index.css";
import Text from "./components/Text/Text";
import Label from "./components/Label/Label";
import Divider from "./components/Divider/Divider";
import Button from "./components/Button/Button";
import Badge from "./components/Badge/Badge";
import Checkbox from "./components/Checkbox/Checkbox";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "24px",
      }}
    >
      {/* Uncontrolled */}
      <Checkbox label="Default checkbox" />

      {/* Controlled */}
      <Checkbox
        label="Controlled checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />

      {/* Indeterminate */}
      <Checkbox label="Indeterminate" indeterminate />

      {/* Disabled */}
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />

      {/* Sizes */}
      <Checkbox label="Small" size="sm" />
      <Checkbox label="Medium" size="md" />
    </div>
  );
}

export default App;
