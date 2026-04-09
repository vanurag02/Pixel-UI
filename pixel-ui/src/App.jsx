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
import Field from "./components/Field/Field";
import Tooltip from "./components/Tooltip/Tooltip";

const frameworks = ["React", "Vue", "Svelte", "Angular", "Solid", "Qwik"];
const skills = ["JavaScript", "TypeScript", "CSS", "HTML", "Node.js", "Python"];

function App() {
  return (
    <div
      style={{
        display: "flex",
        gap: "48px",
        padding: "80px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Tooltip label="This appears on top">
        <Button variant="outline">Top</Button>
      </Tooltip>

      <Tooltip label="This appears on bottom" position="bottom">
        <Button variant="outline">Bottom</Button>
      </Tooltip>

      <Tooltip label="This appears on left" position="left">
        <Button variant="outline">Left</Button>
      </Tooltip>

      <Tooltip label="This appears on right" position="right">
        <Button variant="outline">Right</Button>
      </Tooltip>
    </div>
  );
}

export default App;
