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
import Slider from "./components/Slider/Slider";
import SpinButton from "./components/SpinButton/SpinButton";
import Spinner from "./components/Spinner/Spinner";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Avatar from "./components/Avatar/Avatar";
import AvatarGroup from "./components/AvatarGroup/AvatarGroup";
import Link from "./components/Link/Link";
import Tag from "./components/Tag/Tag";
import Card from "./components/Card/Card";
import Skeleton from "./components/Skeleton/Skeleton";
import ProfileBadge from "./components/ProfileBadge/ProfileBadge";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import BreadcrumbItem from "./components/Breadcrumb/BreadcrumbItem";
import Tablist from "./components/Tablist/Tablist";
import TabItem from "./components/Tablist/TabItem";
import Toolbar from "./components/Toolbar/Toolbar";
import ToolbarGroup from "./components/Toolbar/ToolbarGroup";
import Menu from "./components/Menu/Menu";
import MenuItem from "./components/Menu/MenuItem";
import MenuDivider from "./components/Menu/MenuDivider";
import MenuLabel from "./components/Menu/MenuLabel";
import Dropdown from "./components/Dropdown/Dropdown";
import DropdownItem from "./components/Dropdown/DropdownItem";
import Combobox from "./components/Combobox/Combobox";

const frameworks = ["React", "Vue", "Svelte", "Angular", "Solid", "Qwik"];
const skills = ["JavaScript", "TypeScript", "CSS", "HTML", "Node.js", "Python"];

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
      <Select placeholder="Select a framework">
        <SelectOption value="react" label="React" />
        <SelectOption value="vue" label="Vue" />
        <SelectOption value="svelte" label="Svelte" />
        <SelectOption value="angular" label="Angular" />
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
      <Select error placeholder="Error state">
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
