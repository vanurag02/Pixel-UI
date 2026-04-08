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
  const [tags, setTags] = useState(["React", "TypeScript", "CSS", "Vite"]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "24px",
      }}
    >
      {/* Variants */}
      <div style={{ display: "flex", gap: "8px" }}>
        <Tag>Filled</Tag>
        <Tag variant="subtle">Subtle</Tag>
        <Tag variant="light">Light</Tag>
      </div>

      {/* Colors */}
      <div style={{ display: "flex", gap: "8px" }}>
        <Tag variant="subtle" color="primary">
          Primary
        </Tag>
        <Tag variant="subtle" color="success">
          Success
        </Tag>
        <Tag variant="subtle" color="warning">
          Warning
        </Tag>
        <Tag variant="subtle" color="error">
          Error
        </Tag>
        <Tag variant="subtle" color="info">
          Info
        </Tag>
      </div>

      {/* Closable */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {tags.map((tag) => (
          <Tag
            key={tag}
            variant="subtle"
            closable
            onClose={() => setTags(tags.filter((t) => t !== tag))}
          >
            {tag}
          </Tag>
        ))}
      </div>

      {/* Radius */}
      <div style={{ display: "flex", gap: "8px" }}>
        <Tag radius="none">None</Tag>
        <Tag radius="sm">Small</Tag>
        <Tag radius="pill">Pill</Tag>
      </div>
    </div>
  );
}

export default App;
