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

function App() {
  const [tab1, setTab1] = useState("overview");
  const [tab2, setTab2] = useState("overview");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        padding: "24px",
      }}
    >
      {/* Default variant */}
      <Tablist value={tab1} onChange={setTab1}>
        <TabItem value="overview">Overview</TabItem>
        <TabItem value="settings">Settings</TabItem>
        <TabItem value="members">Members</TabItem>
        <TabItem value="billing" disabled>
          Billing
        </TabItem>
      </Tablist>

      {/* Pills variant */}
      <Tablist value={tab2} onChange={setTab2} variant="pills">
        <TabItem value="overview">Overview</TabItem>
        <TabItem value="settings">Settings</TabItem>
        <TabItem value="members">Members</TabItem>
      </Tablist>

      {/* Sizes */}
      <Tablist defaultValue="a" size="sm">
        <TabItem value="a">Small</TabItem>
        <TabItem value="b">Tabs</TabItem>
      </Tablist>

      <Tablist defaultValue="a" size="lg">
        <TabItem value="a">Large</TabItem>
        <TabItem value="b">Tabs</TabItem>
      </Tablist>
    </div>
  );
}

export default App;
