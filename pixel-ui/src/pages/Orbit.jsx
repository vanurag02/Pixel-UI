import { useState } from "react";
import { useToast } from "../components/Toast/ToastContext";

// ── Pixel UI Components ──
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
import TabPanel from "../components/Tablist/TabPanel";
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
import MessageBar from "../components/MessageBar/MessageBar";
import Toolbar from "../components/Toolbar/Toolbar";
import ToolbarGroup from "../components/Toolbar/ToolbarGroup";
import Pagination from "../components/Pagination/Pagination";
import Tooltip from "../components/Tooltip/Tooltip";
import Popover from "../components/Popover/Popover";
import Accordion from "../components/Accordion/Accordion";
import AccordionItem from "../components/Accordion/AccordionItem";
import RadioGroup2 from "../components/RadioGroup/RadioGroup";
import RadioItem2 from "../components/RadioGroup/RadioItem";

import {
  Search,
  Bell,
  Settings,
  Plus,
  LayoutDashboard,
  Users,
  FolderKanban,
  BarChart2,
  LogOut,
  Edit,
  Trash2,
  Copy,
  MoreHorizontal,
  ChevronRight,
  Calendar,
  Flag,
  Paperclip,
  MessageSquare,
  Filter,
  Download,
  Star,
  Clock,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Info,
} from "lucide-react";

import "./Orbit.css";

// ── Data ──
const members = [
  { initials: "VN", name: "Vanurag", role: "Project Lead" },
  { initials: "SR", name: "Sara R.", role: "Designer" },
  { initials: "KP", name: "Kiran P.", role: "Developer" },
  { initials: "MT", name: "Maya T.", role: "QA Engineer" },
];

const projects = [
  {
    id: 1,
    name: "Pixel UI Library",
    progress: 78,
    color: "primary",
    status: "active",
    priority: "high",
    due: "May 20",
    tasks: 24,
    done: 18,
  },
  {
    id: 2,
    name: "Mobile App Redesign",
    progress: 45,
    color: "info",
    status: "active",
    priority: "medium",
    due: "Jun 5",
    tasks: 16,
    done: 7,
  },
  {
    id: 3,
    name: "API Gateway v2",
    progress: 92,
    color: "success",
    status: "review",
    priority: "high",
    due: "May 10",
    tasks: 30,
    done: 27,
  },
  {
    id: 4,
    name: "Marketing Website",
    progress: 30,
    color: "warning",
    status: "active",
    priority: "low",
    due: "Jul 1",
    tasks: 12,
    done: 4,
  },
  {
    id: 5,
    name: "Data Pipeline",
    progress: 10,
    color: "error",
    status: "blocked",
    priority: "high",
    due: "May 30",
    tasks: 20,
    done: 2,
  },
  {
    id: 6,
    name: "Auth Service",
    progress: 60,
    color: "primary",
    status: "active",
    priority: "medium",
    due: "Jun 15",
    tasks: 10,
    done: 6,
  },
];

const tasks = [
  {
    id: 1,
    title: "Design token system",
    done: true,
    priority: "high",
    assignee: "SR",
  },
  {
    id: 2,
    title: "Build Button component",
    done: true,
    priority: "high",
    assignee: "KP",
  },
  {
    id: 3,
    title: "Write component tests",
    done: false,
    priority: "medium",
    assignee: "MT",
  },
  {
    id: 4,
    title: "Setup Storybook",
    done: false,
    priority: "low",
    assignee: "VN",
  },
  {
    id: 5,
    title: "Publish to npm",
    done: false,
    priority: "high",
    assignee: "KP",
  },
];

const skills = ["React", "TypeScript", "CSS", "Node.js", "Figma", "Testing"];
const priorityColors = { high: "error", medium: "warning", low: "success" };
const statusColors = { active: "success", review: "info", blocked: "error" };

export default function Orbit() {
  const { addToast } = useToast();

  // ── Nav ──
  const [activeNav, setActiveNav] = useState("projects");
  const [activeTab, setActiveTab] = useState("overview");

  // ── Overlays ──
  const [newTaskDialog, setNewTaskDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [settingsDrawer, setSettingsDrawer] = useState(false);
  const [filterDrawer, setFilterDrawer] = useState(false);
  const [menuOpen, setMenuOpen] = useState(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  // ── Form ──
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [priority, setPriority] = useState("medium");
  const [assignee, setAssignee] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [effort, setEffort] = useState(3);
  const [completion, setCompletion] = useState(0);
  const [taskList, setTaskList] = useState(tasks);
  const [loading, setLoading] = useState(false);

  // ── Settings ──
  const [notifications, setNotifications] = useState(true);
  const [emailDigest, setEmailDigest] = useState(false);
  const [autoAssign, setAutoAssign] = useState(true);
  const [theme, setTheme] = useState("light");
  const [page, setPage] = useState(1);
  const [showBanner, setShowBanner] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(false);

  const toggleTask = (id) =>
    setTaskList(
      taskList.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );

  const handleCreateTask = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setNewTaskDialog(false);
      setTaskName("");
      setTaskDesc("");
      addToast({ message: "Task created successfully.", type: "success" });
    }, 1800);
  };

  const handleDelete = () => {
    setDeleteDialog(false);
    addToast({ message: "Project deleted.", type: "error" });
  };

  return (
    <div className="orbit">
      {/* ══════════════════════════════
          SIDEBAR
      ══════════════════════════════ */}
      <aside className="orbit__sidebar">
        <div className="orbit__brand">
          <div className="orbit__brand-icon">
            <div className="orbit__brand-grid">
              {[...Array(4)].map((_, i) => (
                <span key={i} className="orbit__brand-pixel" />
              ))}
            </div>
          </div>
          <Text as="span" size="xl" weight="bold" style={{ color: "#fff" }}>
            Orbit
          </Text>
          <Badge variant="subtle" color="info" size="sm">
            Beta
          </Badge>
        </div>

        <Divider
          style={{ borderColor: "rgba(255,255,255,0.1)", margin: "0" }}
        />

        <nav className="orbit__nav">
          {[
            {
              id: "dashboard",
              icon: <LayoutDashboard size={17} />,
              label: "Dashboard",
            },
            {
              id: "projects",
              icon: <FolderKanban size={17} />,
              label: "Projects",
            },
            { id: "team", icon: <Users size={17} />, label: "Team" },
            {
              id: "analytics",
              icon: <BarChart2 size={17} />,
              label: "Analytics",
            },
            { id: "settings", icon: <Settings size={17} />, label: "Settings" },
          ].map((item) => (
            <Tooltip key={item.id} label={item.label} position="right">
              <button
                className={`orbit__nav-btn ${activeNav === item.id ? "orbit__nav-btn--active" : ""}`}
                onClick={() => setActiveNav(item.id)}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            </Tooltip>
          ))}
        </nav>

        <div className="orbit__sidebar-footer">
          <Divider style={{ borderColor: "rgba(255,255,255,0.1)" }} />
          <ProfileBadge
            initials="VN"
            name="Vanurag"
            description="Project Lead"
            size="sm"
            avatarSize="sm"
            style={{ color: "#fff" }}
          />
          <Tooltip label="Logout" position="right">
            <button className="orbit__logout-btn">
              <LogOut size={16} />
            </button>
          </Tooltip>
        </div>
      </aside>

      {/* ══════════════════════════════
          MAIN
      ══════════════════════════════ */}
      <main className="orbit__main">
        {/* ── Topbar ── */}
        <header className="orbit__topbar">
          <div className="orbit__topbar-left">
            <Breadcrumb size="sm">
              <BreadcrumbItem href="#">Orbit</BreadcrumbItem>
              <BreadcrumbItem href="#">Workspace</BreadcrumbItem>
              <BreadcrumbItem active>
                {activeNav.charAt(0).toUpperCase() + activeNav.slice(1)}
              </BreadcrumbItem>
            </Breadcrumb>
            <Text as="h1" size="2xl" weight="bold" style={{ marginTop: "2px" }}>
              {activeNav === "projects" && "Projects"}
              {activeNav === "dashboard" && "Dashboard"}
              {activeNav === "team" && "Team"}
              {activeNav === "analytics" && "Analytics"}
              {activeNav === "settings" && "Settings"}
            </Text>
          </div>

          <div className="orbit__topbar-right">
            <Input
              placeholder="Search projects..."
              leftSection={<Search size={15} />}
              size="sm"
              style={{ width: "200px" }}
            />

            {/* Notification Popover */}
            <Popover
              trigger={
                <div style={{ position: "relative" }}>
                  <button
                    className="orbit__icon-btn"
                    onClick={() => setNotifOpen(!notifOpen)}
                  >
                    <Bell size={17} />
                    <span className="orbit__notif-dot" />
                  </button>
                </div>
              }
              opened={notifOpen}
              onClose={() => setNotifOpen(false)}
              position="bottom"
              width="280px"
            >
              <Text
                weight="semibold"
                size="md"
                color="text-inverse"
                style={{ marginBottom: "8px" }}
              >
                Notifications
              </Text>
              <Divider style={{ marginBottom: "8px" }} />
              {[
                {
                  icon: <CheckCircle2 size={14} />,
                  text: "API Gateway moved to Review",
                  time: "2m ago",
                  color: "success",
                },
                {
                  icon: <AlertCircle size={14} />,
                  text: "Data Pipeline is blocked",
                  time: "1h ago",
                  color: "error",
                },
                {
                  icon: <Info size={14} />,
                  text: "Sprint review tomorrow at 10am",
                  time: "3h ago",
                  color: "info",
                },
              ].map((n, i) => (
                <div key={i} className="orbit__notif-item">
                  <span style={{ color: `var(--color-${n.color})` }}>
                    {n.icon}
                  </span>
                  <div style={{ flex: 1 }}>
                    <Text size="sm" color="text-inverse">
                      {n.text}
                    </Text>
                    <Text size="xs" color="text-inverse">
                      {n.time}
                    </Text>
                  </div>
                </div>
              ))}
            </Popover>

            <button
              className="orbit__icon-btn"
              onClick={() => setSettingsDrawer(true)}
            >
              <Settings size={17} />
            </button>

            <Avatar initials="VN" size="sm" />
          </div>
        </header>

        {/* ── Body ── */}
        <div className="orbit__body">
          {/* ══════════════════════════
              PROJECTS VIEW
          ══════════════════════════ */}
          {activeNav === "projects" && (
            <div className="orbit__view">
              {/* Banner */}
              {showBanner && (
                <MessageBar
                  variant="info"
                  title="Sprint 4 starts Monday"
                  message="Review your assigned tasks and update estimates before the kickoff."
                  onClose={() => setShowBanner(false)}
                  style={{ marginBottom: "20px" }}
                />
              )}

              {/* Toolbar */}
              <div className="orbit__actions-bar">
                <Toolbar size="sm">
                  <ToolbarGroup>
                    <button
                      className="toolbar__btn"
                      onClick={() => setFilterDrawer(true)}
                    >
                      <Filter size={14} /> Filter
                    </button>
                    <button className="toolbar__btn">
                      <Download size={14} /> Export
                    </button>
                  </ToolbarGroup>
                  <ToolbarGroup>
                    <button className="toolbar__btn">
                      <Star size={14} /> Starred
                    </button>
                    <button className="toolbar__btn">
                      <Clock size={14} /> Recent
                    </button>
                  </ToolbarGroup>
                </Toolbar>

                <div className="orbit__actions-right">
                  <Select
                    size="sm"
                    defaultValue="all"
                    style={{ width: "140px" }}
                  >
                    <SelectOption value="all" label="All projects" />
                    <SelectOption value="active" label="Active" />
                    <SelectOption value="review" label="In review" />
                    <SelectOption value="blocked" label="Blocked" />
                  </Select>
                  <Button size="sm" onClick={() => setNewTaskDialog(true)}>
                    <Plus size={14} /> New Project
                  </Button>
                </div>
              </div>

              {/* Tabs */}
              <Tablist
                value={activeTab}
                onChange={setActiveTab}
                style={{ marginBottom: "20px" }}
              >
                <TabItem value="overview">Overview</TabItem>
                <TabItem value="tasks">Tasks</TabItem>
                <TabItem value="team">Team</TabItem>
                <TabItem value="settings">Settings</TabItem>
              </Tablist>

              {/* ── Overview Tab ── */}
              <TabPanel value="overview" activeValue={activeTab}>
                <div className="orbit__projects-grid">
                  {showSkeleton
                    ? [...Array(6)].map((_, i) => (
                        <Card key={i} className="orbit__project-card">
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "12px",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <Skeleton
                                variant="text"
                                width="60%"
                                height="16px"
                              />
                              <Skeleton
                                variant="rectangle"
                                width="60px"
                                height="22px"
                                radius="pill"
                              />
                            </div>
                            <Skeleton
                              variant="text"
                              width="40%"
                              height="12px"
                            />
                            <Skeleton
                              variant="rectangle"
                              width="100%"
                              height="6px"
                              radius="pill"
                            />
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <Skeleton
                                variant="text"
                                width="30%"
                                height="12px"
                              />
                              <Skeleton
                                variant="circle"
                                width={24}
                                height={24}
                              />
                            </div>
                          </div>
                        </Card>
                      ))
                    : projects.map((project) => (
                        <Card key={project.id} className="orbit__project-card">
                          <div className="orbit__project-header">
                            <Text weight="semibold" size="md">
                              {project.name}
                            </Text>
                            <div
                              style={{
                                display: "flex",
                                gap: "6px",
                                alignItems: "center",
                              }}
                            >
                              <Badge
                                variant="subtle"
                                color={statusColors[project.status]}
                                size="sm"
                              >
                                {project.status}
                              </Badge>
                              <div style={{ position: "relative" }}>
                                <button
                                  className="orbit__more-btn"
                                  onClick={() =>
                                    setMenuOpen(
                                      menuOpen === project.id
                                        ? null
                                        : project.id,
                                    )
                                  }
                                >
                                  <MoreHorizontal size={15} />
                                </button>
                                <Menu
                                  opened={menuOpen === project.id}
                                  onClose={() => setMenuOpen(null)}
                                >
                                  <MenuLabel>Actions</MenuLabel>
                                  <MenuItem
                                    leftSection={<Edit size={14} />}
                                    onClick={() => {
                                      setMenuOpen(null);
                                      addToast({
                                        message: "Editing project...",
                                        type: "info",
                                      });
                                    }}
                                  >
                                    Edit
                                  </MenuItem>
                                  <MenuItem
                                    leftSection={<Copy size={14} />}
                                    onClick={() => {
                                      setMenuOpen(null);
                                      addToast({
                                        message: "Project duplicated.",
                                        type: "success",
                                      });
                                    }}
                                  >
                                    Duplicate
                                  </MenuItem>
                                  <MenuDivider />
                                  <MenuItem
                                    leftSection={<Trash2 size={14} />}
                                    color="error"
                                    onClick={() => {
                                      setMenuOpen(null);
                                      setDeleteDialog(true);
                                    }}
                                  >
                                    Delete
                                  </MenuItem>
                                </Menu>
                              </div>
                            </div>
                          </div>

                          <div className="orbit__project-meta">
                            <Tag
                              variant="subtle"
                              color={priorityColors[project.priority]}
                              size="sm"
                            >
                              <Flag size={10} /> {project.priority}
                            </Tag>
                            <Text size="xs" color="secondary">
                              <Calendar size={11} /> Due {project.due}
                            </Text>
                          </div>

                          <div className="orbit__project-progress">
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "6px",
                              }}
                            >
                              <Text size="xs" color="secondary">
                                {project.done}/{project.tasks} tasks
                              </Text>
                              <Text size="xs" weight="medium">
                                {project.progress}%
                              </Text>
                            </div>
                            <ProgressBar
                              value={project.progress}
                              color={project.color}
                              size="sm"
                            />
                          </div>

                          <div className="orbit__project-footer">
                            <AvatarGroup max={3}>
                              {members.slice(0, 3).map((m) => (
                                <Avatar
                                  key={m.name}
                                  initials={m.initials}
                                  size="xs"
                                />
                              ))}
                            </AvatarGroup>
                            <div style={{ display: "flex", gap: "10px" }}>
                              <Text size="xs" color="secondary">
                                <MessageSquare size={11} /> 4
                              </Text>
                              <Text size="xs" color="secondary">
                                <Paperclip size={11} /> 2
                              </Text>
                            </div>
                          </div>
                        </Card>
                      ))}
                </div>

                <div
                  style={{
                    marginTop: "24px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Pagination total={8} page={page} onChange={setPage} />
                </div>
              </TabPanel>

              {/* ── Tasks Tab ── */}
              <TabPanel value="tasks" activeValue={activeTab}>
                <Card className="orbit__tasks-card">
                  <div className="orbit__tasks-header">
                    <Text weight="semibold" size="lg">
                      Pixel UI Library — Tasks
                    </Text>
                    <Button
                      size="sm"
                      variant="subtle"
                      onClick={() => setNewTaskDialog(true)}
                    >
                      <Plus size={13} /> Add task
                    </Button>
                  </div>
                  <Divider style={{ margin: "12px 0" }} />
                  <div className="orbit__tasks-list">
                    {taskList.map((task) => (
                      <div key={task.id} className="orbit__task-row">
                        <Checkbox
                          checked={task.done}
                          onChange={() => toggleTask(task.id)}
                          size="sm"
                        />
                        <Text
                          size="md"
                          style={{
                            flex: 1,
                            textDecoration: task.done ? "line-through" : "none",
                            opacity: task.done ? 0.5 : 1,
                          }}
                        >
                          {task.title}
                        </Text>
                        <Badge
                          variant="subtle"
                          color={priorityColors[task.priority]}
                          size="sm"
                        >
                          {task.priority}
                        </Badge>
                        <Avatar initials={task.assignee} size="xs" />
                        <Dropdown label="•••" variant="ghost" size="sm">
                          <DropdownItem
                            onClick={() =>
                              addToast({
                                message: "Task edited.",
                                type: "info",
                              })
                            }
                          >
                            Edit
                          </DropdownItem>
                          <DropdownItem
                            onClick={() =>
                              addToast({
                                message: "Task deleted.",
                                type: "error",
                              })
                            }
                          >
                            Delete
                          </DropdownItem>
                        </Dropdown>
                      </div>
                    ))}
                  </div>
                  <Divider style={{ margin: "12px 0" }} />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text size="sm" color="secondary">
                      {taskList.filter((t) => t.done).length} of{" "}
                      {taskList.length} completed
                    </Text>
                    <ProgressBar
                      value={Math.round(
                        (taskList.filter((t) => t.done).length /
                          taskList.length) *
                          100,
                      )}
                      size="sm"
                      style={{ width: "160px" }}
                    />
                  </div>
                </Card>

                {/* FAQ Accordion */}
                <Card
                  className="orbit__tasks-card"
                  style={{ marginTop: "16px" }}
                >
                  <Text
                    weight="semibold"
                    size="lg"
                    style={{ marginBottom: "12px" }}
                  >
                    Project Guidelines
                  </Text>
                  <Divider style={{ marginBottom: "12px" }} />
                  <Accordion>
                    <AccordionItem
                      value="a1"
                      label="What is the definition of done?"
                    >
                      A task is considered done when it has been code reviewed,
                      tested, and deployed to staging. Documentation must also
                      be updated.
                    </AccordionItem>
                    <AccordionItem
                      value="a2"
                      label="How do we handle blockers?"
                    >
                      Raise the blocker in the daily standup immediately. Add
                      the blocked tag to the task and assign it to the project
                      lead for resolution.
                    </AccordionItem>
                    <AccordionItem
                      value="a3"
                      label="What is our branching strategy?"
                    >
                      We follow GitFlow — feature branches from develop,
                      hotfixes from main, and all PRs require at least one
                      approval before merge.
                    </AccordionItem>
                  </Accordion>
                </Card>
              </TabPanel>

              {/* ── Team Tab ── */}
              <TabPanel value="team" activeValue={activeTab}>
                <div className="orbit__team-grid">
                  {members.map((member) => (
                    <Card key={member.name} className="orbit__member-card">
                      <Avatar
                        initials={member.initials}
                        size="lg"
                        style={{ margin: "0 auto 12px" }}
                      />
                      <Text weight="semibold" align="center">
                        {member.name}
                      </Text>
                      <Text
                        size="sm"
                        color="secondary"
                        align="center"
                        style={{ marginBottom: "12px" }}
                      >
                        {member.role}
                      </Text>
                      <Badge
                        variant="subtle"
                        color="success"
                        style={{
                          margin: "0 auto",
                          display: "flex",
                          width: "fit-content",
                          marginBottom: "12px",
                        }}
                      >
                        Online
                      </Badge>
                      <Divider style={{ marginBottom: "12px" }} />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <div style={{ textAlign: "center" }}>
                          <Text weight="bold" size="lg">
                            12
                          </Text>
                          <Text size="xs" color="secondary">
                            Tasks
                          </Text>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <Text weight="bold" size="lg">
                            3
                          </Text>
                          <Text size="xs" color="secondary">
                            Projects
                          </Text>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <Text weight="bold" size="lg">
                            94%
                          </Text>
                          <Text size="xs" color="secondary">
                            Done
                          </Text>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabPanel>

              {/* ── Settings Tab ── */}
              <TabPanel value="settings" activeValue={activeTab}>
                <div className="orbit__settings-grid">
                  <Card className="orbit__settings-card">
                    <Text
                      weight="semibold"
                      size="lg"
                      style={{ marginBottom: "4px" }}
                    >
                      Project Settings
                    </Text>
                    <Text
                      size="sm"
                      color="secondary"
                      style={{ marginBottom: "16px" }}
                    >
                      Manage this project's configuration
                    </Text>
                    <Divider style={{ marginBottom: "16px" }} />
                    <div className="orbit__settings-rows">
                      <div>
                        <Label style={{ marginBottom: "6px" }}>
                          Project name
                        </Label>
                        <Input defaultValue="Pixel UI Library" fullWidth />
                      </div>
                      <div>
                        <Label style={{ marginBottom: "6px" }}>
                          Description
                        </Label>
                        <Textarea
                          defaultValue="A custom React component library built with token-based design."
                          fullWidth
                          rows={3}
                        />
                      </div>
                      <div>
                        <Label style={{ marginBottom: "6px" }}>Priority</Label>
                        <RadioGroup
                          name="proj-priority"
                          defaultValue="high"
                          orientation="horizontal"
                        >
                          <RadioItem value="low" label="Low" />
                          <RadioItem value="medium" label="Medium" />
                          <RadioItem value="high" label="High" />
                        </RadioGroup>
                      </div>
                      <div>
                        <Label style={{ marginBottom: "6px" }}>
                          Skills required
                        </Label>
                        <Combobox
                          data={skills}
                          placeholder="Add skills..."
                          multiple
                          fullWidth
                        />
                      </div>
                      <div>
                        <Label style={{ marginBottom: "6px" }}>
                          Completion — {completion}%
                        </Label>
                        <Slider
                          value={completion}
                          onChange={(e) =>
                            setCompletion(Number(e.target.value))
                          }
                          fullWidth
                          showValue
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          gap: "8px",
                        }}
                      >
                        <Button variant="outline">Cancel</Button>
                        <Button
                          onClick={() =>
                            addToast({
                              message: "Settings saved.",
                              type: "success",
                            })
                          }
                        >
                          Save changes
                        </Button>
                      </div>
                    </div>
                  </Card>

                  <Card className="orbit__settings-card">
                    <Text
                      weight="semibold"
                      size="lg"
                      style={{ marginBottom: "4px" }}
                    >
                      Danger Zone
                    </Text>
                    <Text
                      size="sm"
                      color="secondary"
                      style={{ marginBottom: "16px" }}
                    >
                      Irreversible actions for this project
                    </Text>
                    <Divider style={{ marginBottom: "16px" }} />
                    <div className="orbit__settings-rows">
                      <div className="orbit__danger-row">
                        <div>
                          <Text weight="medium">Archive project</Text>
                          <Text size="sm" color="secondary">
                            Hide from active projects list
                          </Text>
                        </div>
                        <Button
                          variant="outline"
                          color="warning"
                          size="sm"
                          onClick={() =>
                            addToast({
                              message: "Project archived.",
                              type: "warning",
                            })
                          }
                        >
                          Archive
                        </Button>
                      </div>
                      <Divider />
                      <div className="orbit__danger-row">
                        <div>
                          <Text weight="medium">Delete project</Text>
                          <Text size="sm" color="secondary">
                            Permanently remove this project
                          </Text>
                        </div>
                        <Button
                          variant="outline"
                          color="error"
                          size="sm"
                          onClick={() => setDeleteDialog(true)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabPanel>
            </div>
          )}

          {/* ══════════════════════════
              DASHBOARD VIEW
          ══════════════════════════ */}
          {activeNav === "dashboard" && (
            <div className="orbit__view">
              <div className="orbit__stats-grid">
                {[
                  {
                    label: "Total Projects",
                    value: "6",
                    delta: "+2 this month",
                    color: "primary",
                  },
                  {
                    label: "Active Tasks",
                    value: "47",
                    delta: "12 due today",
                    color: "warning",
                  },
                  {
                    label: "Team Members",
                    value: "4",
                    delta: "All online",
                    color: "success",
                  },
                  {
                    label: "Completion Rate",
                    value: "78%",
                    delta: "+5% this week",
                    color: "info",
                  },
                ].map((stat) => (
                  <Card key={stat.label} className="orbit__stat-card">
                    <Text
                      size="sm"
                      color="secondary"
                      style={{ marginBottom: "4px" }}
                    >
                      {stat.label}
                    </Text>
                    <Text as="h2" size="4xl" weight="bold">
                      {stat.value}
                    </Text>
                    <Badge
                      variant="subtle"
                      color={stat.color}
                      size="sm"
                      style={{ marginTop: "6px" }}
                    >
                      {stat.delta}
                    </Badge>
                  </Card>
                ))}
              </div>

              <div className="orbit__dashboard-grid">
                <Card className="orbit__dash-card">
                  <Text
                    weight="semibold"
                    size="lg"
                    style={{ marginBottom: "12px" }}
                  >
                    Project Health
                  </Text>
                  <Divider style={{ marginBottom: "16px" }} />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "14px",
                    }}
                  >
                    {projects.map((p) => (
                      <div key={p.id}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "5px",
                          }}
                        >
                          <Text size="sm" weight="medium">
                            {p.name}
                          </Text>
                          <Text size="sm" color="secondary">
                            {p.progress}%
                          </Text>
                        </div>
                        <ProgressBar
                          value={p.progress}
                          color={p.color}
                          size="sm"
                        />
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="orbit__dash-card">
                  <Text
                    weight="semibold"
                    size="lg"
                    style={{ marginBottom: "12px" }}
                  >
                    Quick Links
                  </Text>
                  <Divider style={{ marginBottom: "16px" }} />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    {[
                      "View all projects",
                      "Team standup notes",
                      "Sprint retrospective",
                      "API documentation",
                      "Design system",
                    ].map((l) => (
                      <Link
                        key={l}
                        href="#"
                        color="primary"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <ChevronRight size={14} /> {l}
                      </Link>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* ══════════════════════════
              TEAM VIEW
          ══════════════════════════ */}
          {activeNav === "team" && (
            <div className="orbit__view">
              <div className="orbit__team-full-grid">
                {members.map((m) => (
                  <Card key={m.name} className="orbit__member-full-card">
                    <Avatar
                      initials={m.initials}
                      size="xl"
                      style={{ margin: "0 auto 16px" }}
                    />
                    <Text weight="bold" size="xl" align="center">
                      {m.name}
                    </Text>
                    <Text
                      color="secondary"
                      size="sm"
                      align="center"
                      style={{ marginBottom: "12px" }}
                    >
                      {m.role}
                    </Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "8px",
                        marginBottom: "16px",
                      }}
                    >
                      <Badge variant="subtle" color="success">
                        Online
                      </Badge>
                      <Badge variant="light" color="primary">
                        React
                      </Badge>
                    </div>
                    <Divider style={{ marginBottom: "16px" }} />
                    <ProgressBar
                      value={Math.floor(Math.random() * 40) + 60}
                      color="primary"
                      size="sm"
                      showValue
                    />
                    <Text
                      size="xs"
                      color="secondary"
                      align="center"
                      style={{ marginTop: "6px" }}
                    >
                      Sprint progress
                    </Text>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* ══════════════════════════
              ANALYTICS VIEW
          ══════════════════════════ */}
          {activeNav === "analytics" && (
            <div className="orbit__view">
              <Card style={{ padding: "24px" }}>
                <Text
                  weight="semibold"
                  size="lg"
                  style={{ marginBottom: "16px" }}
                >
                  Sprint Velocity
                </Text>
                <Divider style={{ marginBottom: "20px" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  {[
                    "Sprint 1",
                    "Sprint 2",
                    "Sprint 3",
                    "Sprint 4 (current)",
                  ].map((sprint, i) => (
                    <div key={sprint}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "6px",
                        }}
                      >
                        <Text size="sm" weight="medium">
                          {sprint}
                        </Text>
                        <Text size="sm" color="secondary">
                          {[32, 28, 35, 20][i]} points
                        </Text>
                      </div>
                      <ProgressBar
                        value={[80, 70, 88, 50][i]}
                        color={["success", "primary", "success", "warning"][i]}
                      />
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* ══════════════════════════
              SETTINGS VIEW
          ══════════════════════════ */}
          {activeNav === "settings" && (
            <div className="orbit__view">
              <div className="orbit__settings-grid">
                <Card className="orbit__settings-card">
                  <Text
                    weight="semibold"
                    size="lg"
                    style={{ marginBottom: "4px" }}
                  >
                    Preferences
                  </Text>
                  <Text
                    size="sm"
                    color="secondary"
                    style={{ marginBottom: "16px" }}
                  >
                    Manage your workspace preferences
                  </Text>
                  <Divider style={{ marginBottom: "16px" }} />
                  <div className="orbit__settings-rows">
                    <div className="orbit__pref-row">
                      <div>
                        <Text weight="medium">Push notifications</Text>
                        <Text size="sm" color="secondary">
                          Get notified about task updates
                        </Text>
                      </div>
                      <Switch
                        checked={notifications}
                        onChange={(e) => setNotifications(e.target.checked)}
                      />
                    </div>
                    <Divider />
                    <div className="orbit__pref-row">
                      <div>
                        <Text weight="medium">Email digest</Text>
                        <Text size="sm" color="secondary">
                          Daily summary of activity
                        </Text>
                      </div>
                      <Switch
                        checked={emailDigest}
                        onChange={(e) => setEmailDigest(e.target.checked)}
                      />
                    </div>
                    <Divider />
                    <div className="orbit__pref-row">
                      <div>
                        <Text weight="medium">Auto-assign tasks</Text>
                        <Text size="sm" color="secondary">
                          Automatically assign based on workload
                        </Text>
                      </div>
                      <Switch
                        checked={autoAssign}
                        onChange={(e) => setAutoAssign(e.target.checked)}
                      />
                    </div>
                    <Divider />
                    <div>
                      <Label style={{ marginBottom: "8px" }}>Theme</Label>
                      <RadioGroup
                        name="theme"
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                        orientation="horizontal"
                      >
                        <RadioItem value="light" label="Light" />
                        <RadioItem value="dark" label="Dark" />
                        <RadioItem value="system" label="System" />
                      </RadioGroup>
                    </div>
                    <Divider />
                    <div>
                      <Label style={{ marginBottom: "8px" }}>
                        Default effort estimate
                      </Label>
                      <SpinButton
                        value={effort}
                        onChange={setEffort}
                        min={1}
                        max={13}
                      />
                    </div>
                  </div>
                </Card>

                <Card className="orbit__settings-card">
                  <Text
                    weight="semibold"
                    size="lg"
                    style={{ marginBottom: "4px" }}
                  >
                    Loading States Demo
                  </Text>
                  <Text
                    size="sm"
                    color="secondary"
                    style={{ marginBottom: "16px" }}
                  >
                    Pixel UI feedback components
                  </Text>
                  <Divider style={{ marginBottom: "16px" }} />
                  <div className="orbit__settings-rows">
                    <div className="orbit__pref-row">
                      <Text weight="medium">Spinners</Text>
                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                        }}
                      >
                        <Spinner size="sm" />
                        <Spinner size="md" />
                        <Spinner size="lg" />
                      </div>
                    </div>
                    <Divider />
                    <div className="orbit__pref-row">
                      <Text weight="medium">Loading button</Text>
                      <Button
                        size="sm"
                        loading={loading}
                        onClick={() => {
                          setLoading(true);
                          setTimeout(() => setLoading(false), 2000);
                        }}
                      >
                        {loading ? "Saving..." : "Save"}
                      </Button>
                    </div>
                    <Divider />
                    <div className="orbit__pref-row">
                      <Text weight="medium">Skeleton loader</Text>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "6px",
                          width: "160px",
                        }}
                      >
                        <Skeleton variant="text" width="100%" />
                        <Skeleton variant="text" width="70%" />
                      </div>
                    </div>
                    <Divider />
                    <div className="orbit__pref-row">
                      <Text weight="medium">Show skeletons</Text>
                      <Switch
                        checked={showSkeleton}
                        onChange={(e) => setShowSkeleton(e.target.checked)}
                        size="sm"
                      />
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* ══════════════════════════════
          DIALOGS & DRAWERS
      ══════════════════════════════ */}

      {/* New Task Dialog */}
      <Dialog
        opened={newTaskDialog}
        onClose={() => setNewTaskDialog(false)}
        title="Create new task"
        size="md"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <Label htmlFor="task-name" required style={{ marginBottom: "6px" }}>
              Task name
            </Label>
            <Input
              id="task-name"
              placeholder="Enter task name..."
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              fullWidth
            />
          </div>
          <div>
            <Label htmlFor="task-desc" style={{ marginBottom: "6px" }}>
              Description
            </Label>
            <Textarea
              id="task-desc"
              placeholder="Describe the task..."
              value={taskDesc}
              onChange={(e) => setTaskDesc(e.target.value)}
              fullWidth
              rows={3}
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
            }}
          >
            <div>
              <Label style={{ marginBottom: "6px" }}>Priority</Label>
              <Select fullWidth defaultValue="medium">
                <SelectOption value="low" label="Low" />
                <SelectOption value="medium" label="Medium" />
                <SelectOption value="high" label="High" />
              </Select>
            </div>
            <div>
              <Label style={{ marginBottom: "6px" }}>Assign to</Label>
              <Select fullWidth placeholder="Select member">
                {members.map((m) => (
                  <SelectOption key={m.name} value={m.name} label={m.name} />
                ))}
              </Select>
            </div>
          </div>
          <div>
            <Label style={{ marginBottom: "6px" }}>Tags</Label>
            <Combobox
              data={skills}
              placeholder="Add tags..."
              multiple
              fullWidth
            />
          </div>
          <Divider />
          <div
            style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}
          >
            <Button variant="outline" onClick={() => setNewTaskDialog(false)}>
              Cancel
            </Button>
            <Button loading={loading} onClick={handleCreateTask}>
              {loading ? "Creating..." : "Create task"}
            </Button>
          </div>
        </div>
      </Dialog>

      {/* Delete Confirm Dialog */}
      <Dialog
        opened={deleteDialog}
        onClose={() => setDeleteDialog(false)}
        title="Delete project"
        size="sm"
      >
        <Text color="secondary">
          Are you sure you want to delete this project? All tasks, files, and
          history will be permanently removed. This action cannot be undone.
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
            onClick={() => setDeleteDialog(false)}
          >
            Cancel
          </Button>
          <Button color="error" size="sm" onClick={handleDelete}>
            Delete project
          </Button>
        </div>
      </Dialog>

      {/* Settings Drawer */}
      <Drawer
        opened={settingsDrawer}
        onClose={() => setSettingsDrawer(false)}
        title="Workspace settings"
        position="right"
        size="md"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <Label style={{ marginBottom: "6px" }}>Workspace name</Label>
            <Input defaultValue="Orbit Workspace" fullWidth />
          </div>
          <div>
            <Label style={{ marginBottom: "6px" }}>Default project view</Label>
            <Select fullWidth defaultValue="grid">
              <SelectOption value="grid" label="Grid" />
              <SelectOption value="list" label="List" />
              <SelectOption value="kanban" label="Kanban" />
            </Select>
          </div>
          <Divider />
          <Switch label="Enable dark mode" size="sm" />
          <Switch label="Compact layout" size="sm" defaultChecked />
          <Switch label="Show completed tasks" size="sm" defaultChecked />
          <Divider />
          <Button
            fullWidth
            onClick={() => {
              setSettingsDrawer(false);
              addToast({ message: "Settings saved.", type: "success" });
            }}
          >
            Save settings
          </Button>
          <Button
            fullWidth
            variant="outline"
            onClick={() => setSettingsDrawer(false)}
          >
            Cancel
          </Button>
        </div>
      </Drawer>

      {/* Filter Drawer */}
      <Drawer
        opened={filterDrawer}
        onClose={() => setFilterDrawer(false)}
        title="Filter projects"
        position="left"
        size="sm"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <Label style={{ marginBottom: "8px" }}>Status</Label>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <Checkbox label="Active" defaultChecked />
              <Checkbox label="In review" defaultChecked />
              <Checkbox label="Blocked" />
              <Checkbox label="Completed" />
            </div>
          </div>
          <Divider />
          <div>
            <Label style={{ marginBottom: "8px" }}>Priority</Label>
            <RadioGroup
              name="filter-priority"
              defaultValue="all"
              orientation="vertical"
            >
              <RadioItem value="all" label="All priorities" />
              <RadioItem value="high" label="High only" />
              <RadioItem value="medium" label="Medium only" />
              <RadioItem value="low" label="Low only" />
            </RadioGroup>
          </div>
          <Divider />
          <div>
            <Label style={{ marginBottom: "8px" }}>Assigned to</Label>
            <Combobox
              data={members.map((m) => m.name)}
              placeholder="Select members..."
              multiple
              fullWidth
            />
          </div>
          <Divider />
          <Button
            fullWidth
            onClick={() => {
              setFilterDrawer(false);
              addToast({ message: "Filters applied.", type: "info" });
            }}
          >
            Apply filters
          </Button>
          <Button
            fullWidth
            variant="outline"
            onClick={() => setFilterDrawer(false)}
          >
            Clear filters
          </Button>
        </div>
      </Drawer>
    </div>
  );
}
