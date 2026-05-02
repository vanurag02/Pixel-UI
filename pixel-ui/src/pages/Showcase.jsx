import { useState } from "react";
import { useToast } from "../components/Toast/ToastContext";
// Pixel UI Components
import Text from "../components/Text/Text";
import Label from "../components/Label/Label";
import Button from "../components/Button/Button";
import Badge from "../components/Badge/Badge";
import Avatar from "../components/Avatar/Avatar";
import AvatarGroup from "../components/AvatarGroup/AvatarGroup";
import Card from "../components/Card/Card";
import Input from "../components/Input/Input";
import Textarea from "../components/Textarea/Textarea";
import Select from "../components/Select/Select";
import SelectOption from "../components/Select/SelectOption";
import Divider from "../components/Divider/Divider";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import Tablist from "../components/Tablist/TabList";
import TabItem from "../components/Tablist/TabItem";
import Switch from "../components/Switch/Switch";
import Checkbox from "../components/Checkbox/Checkbox";
import Tag from "../components/Tag/Tag";
import Spinner from "../components/Spinner/Spinner";
import ProfileBadge from "../components/ProfileBadge/ProfileBadge";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import BreadcrumbItem from "../components/Breadcrumb/BreadcrumbItem";
import Skeleton from "../components/Skeleton/Skeleton";
import Dialog from "../components/Dialog/Dialog";
import Drawer from "../components/Drawer/Drawer";
import Dropdown from "../components/Dropdown/Dropdown";
import DropdownItem from "../components/Dropdown/DropdownItem";
import Link from "../components/Link/Link";
import Slider from "../components/Slider/Slider";
import SpinButton from "../components/SpinButton/SpinButton";
import RadioGroup from "../components/RadioGroup/RadioGroup";
import RadioItem from "../components/RadioGroup/RadioItem";
import Combobox from "../components/Combobox/Combobox";
import Menu from "../components/Menu/Menu";
import MenuItem from "../components/Menu/MenuItem";
import MenuDivider from "../components/Menu/MenuDivider";
import MenuLabel from "../components/Menu/MenuLabel";
import { MessageBar } from "../components";
import Toolbar from "../components/Toolbar/Toolbar";
import ToolbarGroup from "../components/Toolbar/ToolbarGroup";
import Pagination from "../components/Pagination/Pagination";
import Tooltip from "../components/Tooltip/Tooltip";
import Popover from "../components/Popover/Popover";
import TabPanel from "../components/Tablist/TabPanel";

import {
  Sun,
  Moon,
  Search,
  Mail,
  Eye,
  EyeOff,
  Edit,
  Copy,
  Trash2,
  Share,
} from "lucide-react";

import "./Showcase.css";

const frameworks = ["React", "Vue", "Svelte", "Angular", "Solid", "Qwik"];
const skills = ["JavaScript", "TypeScript", "CSS", "HTML", "Node.js", "Python"];

export default function Showcase() {
  const [dark, setDark] = useState(false);
  const [activeTab, setActiveTab] = useState("typography");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const [switched, setSwitched] = useState(false);
  const [radio, setRadio] = useState("react");
  const [slider, setSlider] = useState(40);
  const [spin, setSpin] = useState(5);
  const [tags, setTags] = useState(["Design", "React", "CSS"]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(5);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [tabPanel, setTabPanel] = useState("profile");
  const [bars, setBars] = useState({
    info: true,
    success: true,
    warning: true,
    error: true,
  });

  const { addToast } = useToast();
  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.setAttribute(
      "data-theme",
      !dark ? "dark" : "light",
    );
  };

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2500);
  };

  const sections = [
    "typography",
    "buttons",
    "badges",
    "inputs",
    "selection",
    "feedback",
    "display",
    "overlays",
    "navigation",
  ];

  return (
    <div className="showcase" data-theme={dark ? "dark" : "light"}>
      {/* ===== Header ===== */}
      <header className="showcase__header">
        <div className="showcase__header-left">
          <img src="/pixel-ui-logo.svg" alt="Pixel UI" width="36" height="36" />
          <div>
            <Text as="h1" size="2xl" weight="bold">
              Pixel UI
            </Text>
          </div>
        </div>
        <div className="showcase__header-right">
          <Badge variant="subtle" color="info">
            v1.0.0
          </Badge>
          <Button size="sm" radius="pill" onClick={toggleTheme}>
            {dark ? <Sun size={15} /> : <Moon size={15} />}
            {/* {dark ? "Light mode" : "Dark mode"} */}
          </Button>
        </div>
      </header>

      <div className="showcase__body">
        {/* ===== Sidebar Nav ===== */}
        <aside className="showcase__sidebar">
          {sections.map((section) => (
            <button
              key={section}
              className={`showcase__nav-item ${activeTab === section ? "showcase__nav-item--active" : ""}`}
              onClick={() => setActiveTab(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </aside>

        {/* ===== Content ===== */}
        <div className="showcase__content">
          {/* ===== TYPOGRAPHY ===== */}
          {activeTab === "typography" && (
            <div className="showcase__section">
              <Text
                as="h2"
                size="2xl"
                weight="bold"
                className="showcase__section-title"
              >
                Typography
              </Text>

              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Text sizes
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                {["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"].map(
                  (size) => (
                    <Text
                      key={size}
                      size={size}
                      style={{ marginBottom: "8px" }}
                    >
                      Size {size} — The quick brown fox jumps over the lazy dog
                    </Text>
                  ),
                )}
              </Card>

              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Font weights
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                {["light", "regular", "medium", "semibold", "bold"].map((w) => (
                  <Text
                    key={w}
                    weight={w}
                    size="lg"
                    style={{ marginBottom: "8px" }}
                  >
                    {w.charAt(0).toUpperCase() + w.slice(1)} — The quick brown
                    fox
                  </Text>
                ))}
              </Card>

              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Text colors
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                  {[
                    "primary",
                    "secondary",
                    "disabled",
                    "error",
                    "success",
                    "warning",
                    "info",
                  ].map((color) => (
                    <Text key={color} color={color} size="md">
                      {color}
                    </Text>
                  ))}
                </div>
              </Card>

              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Label
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <Label>Default label</Label>
                  <Label size="sm">Small label</Label>
                  <Label required>Required label</Label>
                </div>
              </Card>

              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Link
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  {["primary", "success", "warning", "error", "info"].map(
                    (color) => (
                      <Link key={color} href="#" color={color}>
                        {color} link
                      </Link>
                    ),
                  )}
                </div>
              </Card>
            </div>
          )}

          {/* ===== BUTTONS ===== */}
          {activeTab === "buttons" && (
            <div className="showcase__section">
              <Text
                as="h2"
                size="2xl"
                weight="bold"
                className="showcase__section-title"
              >
                Buttons
              </Text>

              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Variants
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div className="showcase__row">
                  <Button variant="filled">Filled</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="subtle">Subtle</Button>
                </div>
              </Card>

              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Colors
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div className="showcase__row">
                  <Button color="primary">Primary</Button>
                  <Button color="success">Success</Button>
                  <Button color="warning">Warning</Button>
                  <Button color="error">Error</Button>
                </div>
              </Card>

              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Sizes
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div className="showcase__row" style={{ alignItems: "center" }}>
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </Card>

              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Radius
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div className="showcase__row">
                  <Button radius="none">None</Button>
                  <Button radius="sm">Small</Button>
                  <Button radius="default">Default</Button>
                  <Button radius="lg">Large</Button>
                  <Button radius="pill">Pill</Button>
                </div>
              </Card>

              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  States
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div className="showcase__row">
                  <Button disabled>Disabled</Button>
                  <Button loading={loading} onClick={handleLoading}>
                    {loading ? "Loading..." : "Click to load"}
                  </Button>
                  <Button fullWidth>Full width</Button>
                </div>
              </Card>
            </div>
          )}

          {/* ===== BADGES ===== */}
          {activeTab === "badges" && (
            <div className="showcase__section">
              <Text
                as="h2"
                size="2xl"
                weight="bold"
                className="showcase__section-title"
              >
                Badges & Tags
              </Text>

              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Badge variants
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <div className="showcase__row">
                    {["primary", "success", "warning", "error", "info"].map(
                      (c) => (
                        <Badge key={c} color={c} variant="filled">
                          {c}
                        </Badge>
                      ),
                    )}
                  </div>
                  <div className="showcase__row">
                    {["primary", "success", "warning", "error", "info"].map(
                      (c) => (
                        <Badge key={c} color={c} variant="subtle">
                          {c}
                        </Badge>
                      ),
                    )}
                  </div>
                  <div className="showcase__row">
                    {["primary", "success", "warning", "error", "info"].map(
                      (c) => (
                        <Badge key={c} color={c} variant="light">
                          {c}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>
              </Card>

              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Tag variants
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div className="showcase__row" style={{ flexWrap: "wrap" }}>
                  {tags.map((tag) => (
                    <Tag
                      key={tag}
                      variant="light"
                      closable
                      onClose={() => setTags(tags.filter((t) => t !== tag))}
                    >
                      {tag}
                    </Tag>
                  ))}
                  <Tag variant="subtle" color="success" radius="sm">
                    Active
                  </Tag>
                  <Tag variant="filled" color="error" radius="sm">
                    Urgent
                  </Tag>
                  <Tag radius="pill" variant="subtle" color="info">
                    New
                  </Tag>
                </div>
              </Card>

              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Avatar & Profile
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <div
                    className="showcase__row"
                    style={{ alignItems: "center" }}
                  >
                    {["xs", "sm", "md", "lg", "xl"].map((size) => (
                      <Avatar key={size} initials="JD" size={size} />
                    ))}
                    <AvatarGroup max={3}>
                      <Avatar initials="JD" />
                      <Avatar initials="MR" />
                      <Avatar initials="AS" />
                      <Avatar initials="PL" />
                      <Avatar initials="KW" />
                    </AvatarGroup>
                  </div>
                  <div className="showcase__row">
                    <ProfileBadge
                      initials="JD"
                      name="John Doe"
                      description="Software Engineer"
                      size="sm"
                      avatarSize="sm"
                    />
                    <ProfileBadge
                      initials="MR"
                      name="Maya Rodriguez"
                      description="Product Designer"
                    />
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* ===== INPUTS ===== */}
          {activeTab === "inputs" && (
            <div className="showcase__section">
              <Text
                as="h2"
                size="2xl"
                weight="bold"
                className="showcase__section-title"
              >
                Inputs
              </Text>

              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Input variants
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    maxWidth: "400px",
                  }}
                >
                  <div>
                    <Label htmlFor="name" style={{ marginBottom: "6px" }}>
                      Full name
                    </Label>
                    <Input id="name" placeholder="John Doe" fullWidth />
                  </div>
                  <div>
                    <Label
                      htmlFor="email"
                      required
                      style={{ marginBottom: "6px" }}
                    >
                      Email address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      leftSection={<Mail size={15} />}
                      placeholder="you@example.com"
                      fullWidth
                    />
                  </div>
                  <div>
                    <Label htmlFor="search" style={{ marginBottom: "6px" }}>
                      Search
                    </Label>
                    <Input
                      id="search"
                      leftSection={<Search size={15} />}
                      placeholder="Search..."
                      fullWidth
                    />
                  </div>
                  <div>
                    <Label htmlFor="password" style={{ marginBottom: "6px" }}>
                      Password
                    </Label>
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      fullWidth
                      rightSection={
                        <button
                          onClick={() => setShowPassword(!showPassword)}
                          style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            color: "var(--color-text-secondary)",
                            display: "flex",
                          }}
                        >
                          {showPassword ? (
                            <EyeOff size={15} />
                          ) : (
                            <Eye size={15} />
                          )}
                        </button>
                      }
                    />
                  </div>
                  <div>
                    <Label style={{ marginBottom: "6px" }}>Error state</Label>
                    <Input placeholder="Invalid input" error fullWidth />
                  </div>
                  <div>
                    <Label style={{ marginBottom: "6px" }}>
                      Filled variant
                    </Label>
                    <Input
                      placeholder="Filled input"
                      variant="filled"
                      fullWidth
                    />
                  </div>
                  <div>
                    <Label style={{ marginBottom: "6px" }}>Disabled</Label>
                    <Input placeholder="Disabled input" disabled fullWidth />
                  </div>
                </div>
              </Card>

              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Textarea
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    maxWidth: "400px",
                  }}
                >
                  <Textarea placeholder="Enter your message..." fullWidth />
                  <Textarea placeholder="Error state" error fullWidth />
                  <Textarea placeholder="Disabled" disabled fullWidth />
                </div>
              </Card>

              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Select & Combobox
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    maxWidth: "400px",
                  }}
                >
                  <Select fullWidth placeholder="Select a framework">
                    {frameworks.map((f) => (
                      <SelectOption key={f} value={f} label={f} />
                    ))}
                  </Select>
                  <Combobox
                    data={frameworks}
                    placeholder="Search framework..."
                    fullWidth
                  />
                  <Combobox
                    data={skills}
                    placeholder="Select multiple skills..."
                    multiple
                    fullWidth
                  />
                </div>
              </Card>

              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Slider & Spin Button
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    maxWidth: "400px",
                  }}
                >
                  <div>
                    <Label style={{ marginBottom: "8px" }}>
                      Slider — {slider}%
                    </Label>
                    <Slider
                      value={slider}
                      onChange={(e) => setSlider(Number(e.target.value))}
                      fullWidth
                      showValue
                    />
                  </div>
                  <div>
                    <Label style={{ marginBottom: "8px" }}>Spin button</Label>
                    <SpinButton
                      value={spin}
                      onChange={setSpin}
                      min={0}
                      max={20}
                    />
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* ===== SELECTION ===== */}
          {activeTab === "selection" && (
            <div className="showcase__section">
              <Text
                as="h2"
                size="2xl"
                weight="bold"
                className="showcase__section-title"
              >
                Selection Controls
              </Text>

              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Checkbox
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <Checkbox label="Unchecked" />
                  <Checkbox
                    label="Checked"
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                  />
                  <Checkbox label="Indeterminate" indeterminate />
                  <Checkbox label="Disabled" disabled />
                  <Checkbox label="Disabled checked" disabled defaultChecked />
                </div>
              </Card>

              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Switch
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <Switch
                    label="Notifications"
                    checked={switched}
                    onChange={(e) => setSwitched(e.target.checked)}
                  />
                  <Switch label="Dark mode" defaultChecked />
                  <Switch label="Small size" size="sm" />
                  <Switch label="Large size" size="lg" />
                  <Switch label="Disabled" disabled />
                  <Switch
                    label="Label on left"
                    labelPosition="left"
                    defaultChecked
                  />
                </div>
              </Card>

              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Radio Group
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div style={{ display: "flex", gap: "32px" }}>
                  <div>
                    <Text
                      size="sm"
                      color="secondary"
                      style={{ marginBottom: "8px" }}
                    >
                      Vertical
                    </Text>
                    <RadioGroup
                      name="framework"
                      value={radio}
                      onChange={(e) => setRadio(e.target.value)}
                    >
                      <RadioItem value="react" label="React" />
                      <RadioItem value="vue" label="Vue" />
                      <RadioItem value="svelte" label="Svelte" />
                      <RadioItem value="angular" label="Angular" disabled />
                    </RadioGroup>
                  </div>
                  <div>
                    <Text
                      size="sm"
                      color="secondary"
                      style={{ marginBottom: "8px" }}
                    >
                      Horizontal
                    </Text>
                    <RadioGroup
                      name="size"
                      orientation="horizontal"
                      defaultValue="md"
                    >
                      <RadioItem value="sm" label="SM" />
                      <RadioItem value="md" label="MD" />
                      <RadioItem value="lg" label="LG" />
                    </RadioGroup>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* ===== FEEDBACK ===== */}
          {activeTab === "feedback" && (
            <div className="showcase__section">
              <Text
                as="h2"
                size="2xl"
                weight="bold"
                className="showcase__section-title"
              >
                Feedback
              </Text>

              {/* Toast */}
              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Toast
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div className="showcase__row">
                  <Button
                    color="success"
                    variant="subtle"
                    size="sm"
                    onClick={() =>
                      addToast({
                        message: "Changes saved successfully.",
                        type: "success",
                      })
                    }
                  >
                    Success
                  </Button>
                  <Button
                    color="warning"
                    variant="subtle"
                    size="sm"
                    onClick={() =>
                      addToast({
                        message: "Your session is about to expire.",
                        type: "warning",
                      })
                    }
                  >
                    Warning
                  </Button>
                  <Button
                    color="error"
                    variant="subtle"
                    size="sm"
                    onClick={() =>
                      addToast({
                        message: "Something went wrong.",
                        type: "error",
                      })
                    }
                  >
                    Error
                  </Button>
                  <Button
                    variant="subtle"
                    size="sm"
                    onClick={() =>
                      addToast({
                        message: "New update available.",
                        type: "info",
                      })
                    }
                  >
                    Info
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      addToast({
                        message: "Action completed.",
                        type: "default",
                      })
                    }
                  >
                    Default
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      addToast({
                        message: "This toast won't auto close.",
                        type: "default",
                        duration: 0,
                      })
                    }
                  >
                    Persistent
                  </Button>
                </div>
              </Card>

              {/* Message Bar */}
              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Message Bar
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
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
              </Card>

              {/* Progress Bar */}
              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Progress Bar
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {["primary", "success", "warning", "error", "info"].map(
                    (color, i) => (
                      <div key={color}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "4px",
                          }}
                        >
                          <Text size="sm" color="secondary">
                            {color}
                          </Text>
                          <Text size="sm" weight="medium">
                            {(i + 1) * 18}%
                          </Text>
                        </div>
                        <ProgressBar value={(i + 1) * 18} color={color} />
                      </div>
                    ),
                  )}
                  <div>
                    <Text
                      size="sm"
                      color="secondary"
                      style={{ marginBottom: "4px" }}
                    >
                      Animated
                    </Text>
                    <ProgressBar value={65} animated />
                  </div>
                </div>
              </Card>

              {/* Spinner */}
              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Spinner
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div className="showcase__row" style={{ alignItems: "center" }}>
                  <Spinner size="sm" />
                  <Spinner size="md" />
                  <Spinner size="lg" />
                  <div
                    style={{
                      background: "var(--color-primary)",
                      padding: "12px",
                      borderRadius: "8px",
                      display: "flex",
                      gap: "8px",
                    }}
                  >
                    <Spinner size="sm" color="white" />
                    <Spinner size="md" color="white" />
                  </div>
                </div>
              </Card>

              {/* Skeleton */}
              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Skeleton
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
                    }}
                  >
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
                  <Skeleton
                    variant="rectangle"
                    width="100%"
                    height={120}
                    radius="lg"
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    <Skeleton variant="text" width="100%" />
                    <Skeleton variant="text" width="85%" />
                    <Skeleton variant="text" width="70%" />
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* ===== DISPLAY ===== */}
          {activeTab === "display" && (
            <div className="showcase__section">
              <Text
                as="h2"
                size="2xl"
                weight="bold"
                className="showcase__section-title"
              >
                Display
              </Text>

              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Card variants
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div
                  className="showcase__row"
                  style={{ alignItems: "stretch" }}
                >
                  <Card style={{ flex: 1, padding: "16px" }}>
                    <Text weight="medium">Elevated</Text>
                    <Text size="sm" color="secondary">
                      Default card with shadow
                    </Text>
                  </Card>
                  <Card variant="outline" style={{ flex: 1, padding: "16px" }}>
                    <Text weight="medium">Outline</Text>
                    <Text size="sm" color="secondary">
                      Stronger border, no shadow
                    </Text>
                  </Card>
                  <Card variant="subtle" style={{ flex: 1, padding: "16px" }}>
                    <Text weight="medium">Subtle</Text>
                    <Text size="sm" color="secondary">
                      Light background
                    </Text>
                  </Card>
                  <Card onClick={() => {}} style={{ flex: 1, padding: "16px" }}>
                    <Text weight="medium">Clickable</Text>
                    <Text size="sm" color="secondary">
                      Hover to see effect
                    </Text>
                  </Card>
                </div>
              </Card>

              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Divider
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <Divider />
                  <Divider inset />
                  <Divider>Or continue with</Divider>
                </div>
              </Card>
            </div>
          )}

          {/* ===== OVERLAYS ===== */}
          {activeTab === "overlays" && (
            <div className="showcase__section">
              <Text
                as="h2"
                size="2xl"
                weight="bold"
                className="showcase__section-title"
              >
                Overlays
              </Text>

              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Dialog
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
                <Dialog
                  opened={dialogOpen}
                  onClose={() => setDialogOpen(false)}
                  title="Confirm action"
                  size="sm"
                >
                  <Text color="secondary" size="md">
                    Are you sure you want to delete this item? This action
                    cannot be undone.
                  </Text>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      marginTop: "20px",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      color="error"
                      size="sm"
                      onClick={() => setDialogOpen(false)}
                    >
                      Delete
                    </Button>
                  </div>
                </Dialog>
              </Card>

              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Drawer
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
                <Drawer
                  opened={drawerOpen}
                  onClose={() => setDrawerOpen(false)}
                  title="Drawer panel"
                  position="right"
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                    }}
                  >
                    <Text color="secondary">
                      This is the drawer content area. You can put any Pixel UI
                      component here.
                    </Text>
                    <Input
                      placeholder="Search..."
                      leftSection={<Search size={15} />}
                      fullWidth
                    />
                    <Switch label="Enable notifications" defaultChecked />
                    <Button fullWidth onClick={() => setDrawerOpen(false)}>
                      Close drawer
                    </Button>
                  </div>
                </Drawer>
              </Card>

              <Card className="showcase__card" style={{ position: "relative" }}>
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Menu
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div style={{ position: "relative", display: "inline-block" }}>
                  <Button onClick={() => setMenuOpen(!menuOpen)}>
                    Open Menu
                  </Button>
                  <Menu opened={menuOpen} onClose={() => setMenuOpen(false)}>
                    <MenuLabel>Actions</MenuLabel>
                    <MenuItem
                      leftSection={<Edit size={15} />}
                      onClick={() => setMenuOpen(false)}
                    >
                      Edit
                    </MenuItem>
                    <MenuItem
                      leftSection={<Copy size={15} />}
                      onClick={() => setMenuOpen(false)}
                    >
                      Copy
                    </MenuItem>
                    <MenuItem
                      leftSection={<Share size={15} />}
                      onClick={() => setMenuOpen(false)}
                    >
                      Share
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem
                      leftSection={<Trash2 size={15} />}
                      color="error"
                      onClick={() => setMenuOpen(false)}
                    >
                      Delete
                    </MenuItem>
                  </Menu>
                </div>
              </Card>

              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Dropdown
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div className="showcase__row">
                  <Dropdown label="Outline" variant="outline">
                    <DropdownItem>Edit</DropdownItem>
                    <DropdownItem>Duplicate</DropdownItem>
                    <DropdownItem disabled>Archive</DropdownItem>
                  </Dropdown>
                  <Dropdown label="Filled" variant="filled">
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                  </Dropdown>
                  <Dropdown label="Ghost" variant="ghost">
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                  </Dropdown>
                </div>
              </Card>

              {/* Tooltip */}
              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Tooltip
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div className="showcase__row">
                  <Tooltip label="Tooltip on top" position="top">
                    <Button variant="outline" size="sm">
                      Top
                    </Button>
                  </Tooltip>
                  <Tooltip label="Tooltip on bottom" position="bottom">
                    <Button variant="outline" size="sm">
                      Bottom
                    </Button>
                  </Tooltip>
                  <Tooltip label="Tooltip on left" position="left">
                    <Button variant="outline" size="sm">
                      Left
                    </Button>
                  </Tooltip>
                  <Tooltip label="Tooltip on right" position="right">
                    <Button variant="outline" size="sm">
                      Right
                    </Button>
                  </Tooltip>
                  <Tooltip label="500ms delay" position="top" delay={500}>
                    <Button variant="subtle" size="sm">
                      Delayed
                    </Button>
                  </Tooltip>
                </div>
              </Card>

              {/* Popover */}
              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Popover
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div className="showcase__row">
                  <Popover
                    trigger={
                      <Button onClick={() => setPopoverOpen(!popoverOpen)}>
                        Open Popover
                      </Button>
                    }
                    opened={popoverOpen}
                    onClose={() => setPopoverOpen(false)}
                    width="220px"
                  >
                    <Text size="sm" weight="semibold" color="text-inverse">
                      Popover title
                    </Text>
                    <Text
                      size="sm"
                      color="text-inverse"
                      style={{ marginTop: "4px" }}
                    >
                      Some helpful content goes here.
                    </Text>
                  </Popover>
                </div>
              </Card>
            </div>
          )}

          {/* ===== NAVIGATION ===== */}
          {activeTab === "navigation" && (
            <div className="showcase__section">
              <Text
                as="h2"
                size="2xl"
                weight="bold"
                className="showcase__section-title"
              >
                Navigation
              </Text>

              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Breadcrumb
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <Breadcrumb>
                    <BreadcrumbItem href="#">Home</BreadcrumbItem>
                    <BreadcrumbItem href="#">Components</BreadcrumbItem>
                    <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
                  </Breadcrumb>
                  <Breadcrumb separator=">">
                    <BreadcrumbItem href="#">Home</BreadcrumbItem>
                    <BreadcrumbItem href="#">Settings</BreadcrumbItem>
                    <BreadcrumbItem active>Profile</BreadcrumbItem>
                  </Breadcrumb>
                </div>
              </Card>

              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Tablist
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  {/* DEFAULT VARIANT */}
                  <Tablist defaultValue="a">
                    <TabItem value="a">Overview</TabItem>
                    <TabItem value="b">Analytics</TabItem>
                    <TabItem value="c">Reports</TabItem>
                    <TabItem value="d" disabled>
                      Billing
                    </TabItem>
                  </Tablist>

                  {/* PILLS VARIANT */}
                  <Tablist defaultValue="a" variant="pills">
                    <TabItem value="a">Day</TabItem>
                    <TabItem value="b">Week</TabItem>
                    <TabItem value="c">Month</TabItem>
                  </Tablist>
                </div>
              </Card>

              {/* TABPANEL */}
              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Tablist with TabPanel
                </Text>
                <Divider style={{ marginBottom: "16px" }} />

                <Tablist value={tabPanel} onChange={setTabPanel}>
                  <TabItem
                    value="profile"
                    id="tab-profile"
                    controls="panel-profile"
                  >
                    Profile
                  </TabItem>
                  <TabItem
                    value="settings"
                    id="tab-settings"
                    controls="panel-settings"
                  >
                    Settings
                  </TabItem>
                  <TabItem
                    value="billing"
                    id="tab-billing"
                    controls="panel-billing"
                  >
                    Billing
                  </TabItem>
                </Tablist>

                <TabPanel
                  value="profile"
                  activeValue={tabPanel}
                  id="panel-profile"
                  labelledBy="tab-profile"
                >
                  <Card
                    variant="subtle"
                    style={{ padding: "16px", marginTop: "4px" }}
                  >
                    <Text weight="medium" style={{ marginBottom: "4px" }}>
                      Profile
                    </Text>
                    <Text color="secondary" size="sm">
                      Manage your profile information and preferences.
                    </Text>
                  </Card>
                </TabPanel>

                <TabPanel
                  value="settings"
                  activeValue={tabPanel}
                  id="panel-settings"
                  labelledBy="tab-settings"
                >
                  <Card
                    variant="subtle"
                    style={{ padding: "16px", marginTop: "4px" }}
                  >
                    <Text weight="medium" style={{ marginBottom: "4px" }}>
                      Settings
                    </Text>
                    <Text color="secondary" size="sm">
                      Configure your account settings and notifications.
                    </Text>
                  </Card>
                </TabPanel>

                <TabPanel
                  value="billing"
                  activeValue={tabPanel}
                  id="panel-billing"
                  labelledBy="tab-billing"
                >
                  <Card
                    variant="subtle"
                    style={{ padding: "16px", marginTop: "4px" }}
                  >
                    <Text weight="medium" style={{ marginBottom: "4px" }}>
                      Billing
                    </Text>
                    <Text color="secondary" size="sm">
                      Manage your subscription and payment methods.
                    </Text>
                  </Card>
                </TabPanel>
              </Card>

              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Toolbar
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <Toolbar>
                  <ToolbarGroup>
                    <button className="toolbar__btn">Bold</button>
                    <button className="toolbar__btn">Italic</button>
                    <button className="toolbar__btn">Underline</button>
                  </ToolbarGroup>
                  <ToolbarGroup>
                    <button className="toolbar__btn">Left</button>
                    <button className="toolbar__btn">Center</button>
                    <button className="toolbar__btn">Right</button>
                  </ToolbarGroup>
                  <ToolbarGroup>
                    <button className="toolbar__btn">Undo</button>
                    <button className="toolbar__btn">Redo</button>
                  </ToolbarGroup>
                </Toolbar>
              </Card>

              <Card className="showcase__card">
                <Text weight="semibold" style={{ marginBottom: "16px" }}>
                  Pagination
                </Text>
                <Divider style={{ marginBottom: "16px" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  {/* Basic */}
                  <div>
                    <Text
                      size="sm"
                      color="secondary"
                      style={{ marginBottom: "8px" }}
                    >
                      Basic — page {page} of 10
                    </Text>
                    <Pagination total={10} page={page} onChange={setPage} />
                  </div>

                  {/* With dots */}
                  <div>
                    <Text
                      size="sm"
                      color="secondary"
                      style={{ marginBottom: "8px" }}
                    >
                      With ellipsis
                    </Text>
                    <Pagination total={20} page={page} onChange={setPage} />
                  </div>

                  {/* More siblings */}
                  <div>
                    <Text
                      size="sm"
                      color="secondary"
                      style={{ marginBottom: "8px" }}
                    >
                      siblings={2}
                    </Text>
                    <Pagination
                      total={20}
                      page={page}
                      onChange={setPage}
                      siblings={2}
                    />
                  </div>

                  {/* Sizes */}
                  <div>
                    <Text
                      size="sm"
                      color="secondary"
                      style={{ marginBottom: "8px" }}
                    >
                      Sizes
                    </Text>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                      }}
                    >
                      <Pagination
                        total={10}
                        page={3}
                        onChange={() => {}}
                        size="sm"
                      />
                      <Pagination
                        total={10}
                        page={3}
                        onChange={() => {}}
                        size="md"
                      />
                      <Pagination
                        total={10}
                        page={3}
                        onChange={() => {}}
                        size="lg"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
