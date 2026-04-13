import { useState } from "react";
import "./index.css";
import { useToast } from "./components/Toast/ToastContext";
import { Search } from "lucide-react";

import useTheme from "./hooks/useTheme";

import {
  Text,
  Label,
  Divider,
  Image,
  Button,
  Input,
  Textarea,
  Checkbox,
  Switch,
  RadioGroup,
  RadioItem,
  Select,
  SelectOption,
  Slider,
  SpinButton,
  Combobox,
  Field,
  Badge,
  Spinner,
  ProgressBar,
  Avatar,
  AvatarGroup,
  Link,
  Tag,
  Card,
  Skeleton,
  ProfileBadge,
  Breadcrumb,
  BreadcrumbItem,
  Tablist,
  TabItem,
  Toolbar,
  ToolbarGroup,
  Menu,
  MenuItem,
  MenuDivider,
  MenuLabel,
  Dropdown,
  DropdownItem,
  Tooltip,
  Popover,
  Dialog,
  Drawer,
  Toast,
  MessageBar,
  Accordion,
  AccordionItem,
} from "./components";

const frameworks = ["React", "Vue", "Svelte", "Angular", "Solid"];
const skills = ["JavaScript", "TypeScript", "CSS", "HTML", "Node.js"];

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: "48px" }}>
      <Text as="h2" size="2xl" weight="bold" style={{ marginBottom: "4px" }}>
        {title}
      </Text>
      <Divider style={{ marginBottom: "24px" }} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          alignItems: "flex-start",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function App() {
  const { theme, toggleTheme } = useTheme();

  // Form state
  const [checked, setChecked] = useState(false);
  const [switched, setSwitched] = useState(false);
  const [radio, setRadio] = useState("react");
  const [tab, setTab] = useState("overview");
  const [menuOpen, setMenuOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tags, setTags] = useState(["React", "TypeScript"]);

  return (
    <div style={{ padding: "40px", maxWidth: "1000px", margin: "0 auto" }}>
      {/* Theme Toggle */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "32px",
        }}
      >
        <Button variant="outline" onClick={toggleTheme}>
          {theme === "light" ? "Switch to Dark" : "Switch to Light"}
        </Button>
      </div>

      <Text as="h1" size="4xl" weight="bold" style={{ marginBottom: "8px" }}>
        Pixel UI
      </Text>
      <Text color="secondary" style={{ marginBottom: "48px" }}>
        Component library showcase — two samples per component
      </Text>

      {/* ===== Text ===== */}
      <Section title="Text">
        <Text as="h2" size="3xl" weight="bold">
          Display heading
        </Text>
        <Text
          size="md"
          color="secondary"
          truncate
          style={{ maxWidth: "200px" }}
        >
          This is a very long secondary text that will be truncated with
          ellipsis
        </Text>
      </Section>

      {/* ===== Label ===== */}
      <Section title="Label">
        <Label htmlFor="email">Email address</Label>
        <Label htmlFor="name" size="sm" required>
          Full name
        </Label>
      </Section>

      {/* ===== Divider ===== */}
      <Section title="Divider">
        <div style={{ width: "100%" }}>
          <Divider />
        </div>
        <div style={{ width: "100%" }}>
          <Divider inset>Or continue with</Divider>
        </div>
      </Section>

      {/* ===== Button ===== */}
      <Section title="Button">
        <Button>Primary</Button>
        <Button variant="outline" color="error">
          Delete
        </Button>
        <Button variant="subtle" color="success">
          Approve
        </Button>
        <Button loading>Saving...</Button>
        <Button disabled>Disabled</Button>
        <Button radius="pill" size="sm">
          Pill button
        </Button>
      </Section>

      {/* ===== Input ===== */}
      <Section title="Input">
        <Input
          placeholder="Enter your email"
          type="email"
          fullWidth
          style={{ maxWidth: "280px" }}
        />
        <Input
          placeholder="Search..."
          leftSection={
            <span style={{ fontSize: "14px" }}>
              <Search />
            </span>
          }
          fullWidth
          style={{ maxWidth: "280px" }}
        />
      </Section>

      {/* ===== Textarea ===== */}
      <Section title="Textarea">
        <Textarea
          placeholder="Write your message..."
          fullWidth
          style={{ maxWidth: "280px" }}
        />
        <Textarea
          placeholder="Disabled textarea"
          disabled
          fullWidth
          style={{ maxWidth: "280px" }}
        />
      </Section>

      {/* ===== Checkbox ===== */}
      <Section title="Checkbox">
        <Checkbox
          label="Accept terms and conditions"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <Checkbox label="Indeterminate state" indeterminate />
        <Checkbox label="Disabled" disabled />
      </Section>

      {/* ===== Switch ===== */}
      <Section title="Switch">
        <Switch
          label="Enable notifications"
          checked={switched}
          onChange={(e) => setSwitched(e.target.checked)}
        />
        <Switch label="Dark mode" labelPosition="left" defaultChecked />
      </Section>

      {/* ===== Radio Group ===== */}
      <Section title="Radio Group">
        <RadioGroup
          name="framework"
          value={radio}
          onChange={(e) => setRadio(e.target.value)}
        >
          <RadioItem value="react" label="React" />
          <RadioItem value="vue" label="Vue" />
          <RadioItem value="svelte" label="Svelte" />
        </RadioGroup>
        <RadioGroup name="size" orientation="horizontal" defaultValue="md">
          <RadioItem value="sm" label="Small" />
          <RadioItem value="md" label="Medium" />
          <RadioItem value="lg" label="Large" />
        </RadioGroup>
      </Section>

      {/* ===== Select ===== */}
      <Section title="Select">
        <Select placeholder="Select a plan" style={{ minWidth: "180px" }}>
          <SelectOption value="free" label="Free" />
          <SelectOption value="pro" label="Pro" />
          <SelectOption value="enterprise" label="Enterprise" />
        </Select>
        <Select placeholder="Select size" error style={{ minWidth: "180px" }}>
          <SelectOption value="sm" label="Small" />
          <SelectOption value="md" label="Medium" />
        </Select>
      </Section>

      {/* ===== Slider ===== */}
      <Section title="Slider">
        <Slider
          defaultValue={40}
          showValue
          fullWidth
          style={{ maxWidth: "280px" }}
        />
        <Slider
          defaultValue={70}
          color="success"
          size="lg"
          showValue
          fullWidth
          style={{ maxWidth: "280px" }}
        />
      </Section>

      {/* ===== Spin Button ===== */}
      <Section title="Spin Button">
        <SpinButton min={0} max={10} defaultValue={3} />
        <SpinButton min={0} max={100} step={10} defaultValue={50} size="lg" />
      </Section>

      {/* ===== Combobox ===== */}
      <Section title="Combobox">
        <Combobox
          data={frameworks}
          placeholder="Select framework"
          style={{ minWidth: "220px" }}
        />
        <Combobox
          data={skills}
          placeholder="Select skills"
          multiple
          style={{ minWidth: "220px" }}
        />
      </Section>

      {/* ===== Field ===== */}
      <Section title="Field">
        <Field label="Email" required style={{ minWidth: "220px" }}>
          <Input placeholder="you@example.com" fullWidth />
        </Field>
        <Field
          label="Bio"
          error="Bio is too short"
          style={{ minWidth: "220px" }}
        >
          <Textarea placeholder="Tell us about yourself..." fullWidth />
        </Field>
      </Section>

      {/* ===== Badge ===== */}
      <Section title="Badge">
        <Badge color="success">Active</Badge>
        <Badge color="warning" variant="light">
          Pending
        </Badge>
        <Badge color="error" variant="subtle">
          Failed
        </Badge>
        <Badge color="info">Info</Badge>
      </Section>

      {/* ===== Spinner ===== */}
      <Section title="Spinner">
        <Spinner size="sm" />
        <Spinner size="lg" />
        <div
          style={{
            background: "#228be6",
            padding: "12px",
            borderRadius: "8px",
          }}
        >
          <Spinner color="white" />
        </div>
      </Section>

      {/* ===== Progress Bar ===== */}
      <Section title="Progress Bar">
        <ProgressBar
          value={65}
          showValue
          size="md"
          fullWidth
          style={{ maxWidth: "280px" }}
        />
        <ProgressBar
          value={80}
          color="success"
          animated
          fullWidth
          style={{ maxWidth: "280px" }}
        />
        <ProgressBar
          value={45}
          color="warning"
          size="lg"
          fullWidth
          style={{ maxWidth: "280px" }}
        />
      </Section>

      {/* ===== Avatar ===== */}
      <Section title="Avatar">
        <Avatar src="https://i.pravatar.cc/150?img=1" alt="User" size="md" />
        <Avatar initials="JD" size="lg" />
        <Avatar size="md" />
      </Section>

      {/* ===== Avatar Group ===== */}
      <Section title="Avatar Group">
        <AvatarGroup max={3}>
          <Avatar initials="JD" />
          <Avatar initials="MR" />
          <Avatar initials="AS" />
          <Avatar initials="PL" />
          <Avatar initials="KW" />
        </AvatarGroup>
        <AvatarGroup max={4}>
          <Avatar src="https://i.pravatar.cc/150?img=1" />
          <Avatar src="https://i.pravatar.cc/150?img=2" />
          <Avatar src="https://i.pravatar.cc/150?img=3" />
          <Avatar src="https://i.pravatar.cc/150?img=4" />
          <Avatar src="https://i.pravatar.cc/150?img=5" />
        </AvatarGroup>
      </Section>

      {/* ===== Link ===== */}
      <Section title="Link">
        <Link href="#">Default primary link</Link>
        <Link href="#" color="error" underline="always">
          Always underlined error link
        </Link>
      </Section>

      {/* ===== Tag ===== */}
      <Section title="Tag">
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
        <Tag variant="light" color="success">
          Approved
        </Tag>
        <Tag variant="filled" color="error" radius="pill">
          Rejected
        </Tag>
      </Section>

      {/* ===== Card ===== */}
      <Section title="Card">
        <Card style={{ width: "240px" }}>
          <Card.Header>Card Title</Card.Header>
          <Card.Body>
            This is the card body with some content inside it.
          </Card.Body>
          <Card.Footer>
            <Button size="sm" variant="outline">
              Cancel
            </Button>
            <Button size="sm">Save</Button>
          </Card.Footer>
        </Card>
        <Card
          variant="subtle"
          style={{ width: "240px" }}
          onClick={() => alert("Clicked!")}
        >
          <Card.Header>Clickable Card</Card.Header>
          <Card.Body>Hover over me to see the effect.</Card.Body>
        </Card>
      </Section>

      {/* ===== Skeleton ===== */}
      <Section title="Skeleton">
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <Skeleton variant="circle" width={40} height={40} />
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Skeleton variant="text" width="160px" />
            <Skeleton variant="text" width="100px" />
          </div>
        </div>
        <Skeleton variant="rectangle" width="240px" height={120} radius="lg" />
      </Section>

      {/* ===== Profile Badge ===== */}
      <Section title="Profile Badge">
        <ProfileBadge
          src="https://i.pravatar.cc/150?img=3"
          name="John Doe"
          description="Software Engineer"
        />
        <ProfileBadge
          initials="MR"
          name="Maya Rodriguez"
          description="Product Designer"
          size="lg"
          avatarSize="lg"
        />
      </Section>

      {/* ===== Breadcrumb ===== */}
      <Section title="Breadcrumb">
        <Breadcrumb>
          <BreadcrumbItem href="#">Home</BreadcrumbItem>
          <BreadcrumbItem href="#">Components</BreadcrumbItem>
          <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb separator=">">
          <BreadcrumbItem href="#">Dashboard</BreadcrumbItem>
          <BreadcrumbItem href="#">Settings</BreadcrumbItem>
          <BreadcrumbItem active>Profile</BreadcrumbItem>
        </Breadcrumb>
      </Section>

      {/* ===== Tablist ===== */}
      <Section title="Tablist">
        <div style={{ width: "100%" }}>
          <Tablist value={tab} onChange={setTab}>
            <TabItem value="overview">Overview</TabItem>
            <TabItem value="settings">Settings</TabItem>
            <TabItem value="members">Members</TabItem>
            <TabItem value="billing" disabled>
              Billing
            </TabItem>
          </Tablist>
        </div>
        <Tablist defaultValue="a" variant="pills">
          <TabItem value="a">Daily</TabItem>
          <TabItem value="b">Weekly</TabItem>
          <TabItem value="c">Monthly</TabItem>
        </Tablist>
      </Section>

      {/* ===== Toolbar ===== */}
      <Section title="Toolbar">
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
        </Toolbar>
        <Toolbar variant="outline">
          <ToolbarGroup>
            <button className="toolbar__btn">Cut</button>
            <button className="toolbar__btn">Copy</button>
            <button className="toolbar__btn">Paste</button>
          </ToolbarGroup>
        </Toolbar>
      </Section>

      {/* ===== Menu ===== */}
      <Section title="Menu">
        <div style={{ position: "relative" }}>
          <Button onClick={() => setMenuOpen(!menuOpen)}>Open Menu</Button>
          <Menu opened={menuOpen} onClose={() => setMenuOpen(false)}>
            <Menu.Header>Actions</Menu.Header>
            <MenuLabel>File</MenuLabel>
            <MenuItem onClick={() => setMenuOpen(false)}>Edit</MenuItem>
            <MenuItem onClick={() => setMenuOpen(false)}>Duplicate</MenuItem>
            <MenuDivider />
            <MenuItem color="error" onClick={() => setMenuOpen(false)}>
              Delete
            </MenuItem>
          </Menu>
        </div>
      </Section>

      {/* ===== Dropdown ===== */}
      <Section title="Dropdown">
        <Dropdown label="Options">
          <DropdownItem onClick={() => {}}>Edit</DropdownItem>
          <DropdownItem onClick={() => {}}>Duplicate</DropdownItem>
          <DropdownItem disabled>Archive</DropdownItem>
        </Dropdown>
        <Dropdown label="Actions" variant="filled">
          <DropdownItem onClick={() => {}}>Save</DropdownItem>
          <DropdownItem onClick={() => {}}>Export</DropdownItem>
        </Dropdown>
      </Section>

      {/* ===== Tooltip ===== */}
      <Section title="Tooltip">
        <Tooltip label="This is a tooltip">
          <Button variant="outline">Hover me</Button>
        </Tooltip>
        <Tooltip label="Appears below" position="bottom">
          <Button variant="subtle">Hover me too</Button>
        </Tooltip>
      </Section>

      {/* ===== Popover ===== */}
      <Section title="Popover">
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
          <Text size="sm" weight="semibold">
            Popover title
          </Text>
          <Text size="sm" color="secondary" style={{ marginTop: "4px" }}>
            Some helpful content goes here.
          </Text>
        </Popover>
      </Section>

      {/* ===== Dialog ===== */}
      <Section title="Dialog">
        <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
        <Dialog
          opened={dialogOpen}
          onClose={() => setDialogOpen(false)}
          title="Confirm deletion"
          size="sm"
        >
          <Dialog.Content>
            <Text color="secondary">
              Are you sure you want to delete this item? This cannot be undone.
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button color="error" onClick={() => setDialogOpen(false)}>
              Delete
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Section>

      {/* ===== Drawer ===== */}
      <Section title="Drawer">
        <Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
        <Drawer
          opened={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          title="Settings"
        >
          <Text color="secondary">Drawer content goes here.</Text>
          <div style={{ marginTop: "16px" }}>
            <Switch label="Enable notifications" defaultChecked />
          </div>
        </Drawer>
      </Section>

      {/* ===== Accordion ===== */}
      <Section title="Accordion">
        <Accordion
          defaultValue="item1"
          style={{ width: "100%", maxWidth: "480px" }}
        >
          <AccordionItem value="item1" label="What is Pixel UI?">
            Pixel UI is a custom React component library built with a
            token-based design system.
          </AccordionItem>
          <AccordionItem value="item2" label="How do I install it?">
            Clone the repo and import components directly into your React
            project.
          </AccordionItem>
          <AccordionItem value="item3" label="Is it free?" disabled>
            Yes, completely open source.
          </AccordionItem>
        </Accordion>
      </Section>

      {/* ===== Image ===== */}
      <Section title="Image">
        <Image
          src="https://picsum.photos/200/150"
          alt="Sample"
          width={200}
          height={150}
          radius="lg"
        />
        <Image
          src="https://picsum.photos/150"
          alt="Round"
          width={150}
          height={150}
          radius="pill"
        />
      </Section>
    </div>
  );
}
