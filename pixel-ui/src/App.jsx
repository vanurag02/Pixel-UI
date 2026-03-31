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
import Switch from "./components/Switch/Switch";
import RadioGroup from "./components/RadioGroup/Radiogroup";
import RadioItem from "./components/RadioGroup/Radioitem";
import Select from "./components/Select/Select";
import SelectOption from "./components/Select/SelectOption";

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
      <Select placeholder="Select a plan">
        <SelectOption value="free" label="Free" />
        <SelectOption value="pro" label="Pro" />
        <SelectOption value="enterprise" label="Enterprise" />
      </Select>

      {/* Sizes */}
      <Select size="sm" placeholder="Small">
        <SelectOption value="a" label="Option A" />
        <SelectOption value="b" label="Option B" />
      </Select>

      <Select size="lg" placeholder="Large">
        <SelectOption value="a" label="Option A" />
        <SelectOption value="b" label="Option B" />
      </Select>

      {/* Error */}
      <Select error placeholder="Select an option">
        <SelectOption value="a" label="Option A" />
      </Select>

      {/* Disabled */}
      <Select disabled placeholder="Disabled">
        <SelectOption value="a" label="Option A" />
      </Select>

      {/* Full width */}
      <Select fullWidth placeholder="Full width">
        <SelectOption value="a" label="Option A" />
        <SelectOption value="b" label="Option B" />
      </Select>
    </div>
  );
}

export default App;
