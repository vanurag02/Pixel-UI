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

function App() {
  return (
    <div style={{ display: "flex", gap: "16px", padding: "24px" }}>
      {/* Outline — default */}
      <Dropdown label="Options">
        <DropdownItem onClick={() => alert("Edit")}>Edit</DropdownItem>
        <DropdownItem onClick={() => alert("Duplicate")}>
          Duplicate
        </DropdownItem>
        <DropdownItem disabled>Archive</DropdownItem>
      </Dropdown>

      {/* Filled */}
      <Dropdown label="Actions" variant="filled">
        <DropdownItem onClick={() => {}}>Save</DropdownItem>
        <DropdownItem onClick={() => {}}>Export</DropdownItem>
      </Dropdown>

      {/* Ghost */}
      <Dropdown label="More" variant="ghost">
        <DropdownItem onClick={() => {}}>Settings</DropdownItem>
        <DropdownItem onClick={() => {}}>Help</DropdownItem>
      </Dropdown>

      {/* Disabled */}
      <Dropdown label="Disabled" disabled>
        <DropdownItem>Item</DropdownItem>
      </Dropdown>
    </div>
  );
}

export default App;
