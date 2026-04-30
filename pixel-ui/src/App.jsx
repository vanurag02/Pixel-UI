import "./index.css";
import { useToast } from "./components/Toast/ToastContext";
import { Search } from "lucide-react";

import { useState } from "react";
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
  Pagination,
} from "./components";
import useTheme from "./hooks/useTheme";

import Showcase from "./pages/Showcase";

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

// export default function App() {
//   const { theme, toggleTheme } = useTheme();
//   const { addToast } = useToast();

//   // Form state
//   const [checked, setChecked] = useState(false);
//   const [switched, setSwitched] = useState(false);
//   const [radio, setRadio] = useState("react");
//   const [tab, setTab] = useState("overview");
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [popoverOpen, setPopoverOpen] = useState(false);
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [tags, setTags] = useState(["React", "TypeScript"]);
//   const [bars, setBars] = useState({
//     info: true,
//     success: true,
//     warning: true,
//     error: true,
//   });

//   // return (
//   //   <div style={{ padding: "40px", maxWidth: "1000px", margin: "0 auto" }}>
//   //     {/* Theme Toggle */}
//   //     <div
//   //       style={{
//   //         display: "flex",
//   //         justifyContent: "flex-end",
//   //         marginBottom: "32px",
//   //       }}
//   //     >
//   //       <Button onClick={toggleTheme}>
//   //         {theme === "light" ? "Switch to Dark" : "Switch to Light"}
//   //       </Button>
//   //     </div>

//   //     <Text as="h1" size="4xl" weight="bold" style={{ marginBottom: "8px" }}>
//   //       Pixel UI
//   //     </Text>
//   //     <Text color="secondary" style={{ marginBottom: "48px" }}>
//   //       Component Library Showcase
//   //     </Text>

//   //     <div
//   //       style={{
//   //         display: "flex",
//   //         gap: "8px",
//   //         padding: "24px",
//   //         flexWrap: "wrap",
//   //       }}
//   //     >
//   //       <Button onClick={() => addToast({ message: "Action completed!" })}>
//   //         Default
//   //       </Button>
//   //       <Button
//   //         color="success"
//   //         onClick={() =>
//   //           addToast({ message: "Saved successfully!", type: "success" })
//   //         }
//   //       >
//   //         Success
//   //       </Button>
//   //       <Button
//   //         color="error"
//   //         onClick={() =>
//   //           addToast({ message: "Something went wrong.", type: "error" })
//   //         }
//   //       >
//   //         Error
//   //       </Button>
//   //       <Button
//   //         onClick={() =>
//   //           addToast({ message: "Please review your input.", type: "warning" })
//   //         }
//   //       >
//   //         Warning
//   //       </Button>
//   //       <Button
//   //         onClick={() =>
//   //           addToast({ message: "New update available.", type: "info" })
//   //         }
//   //       >
//   //         Info
//   //       </Button>
//   //       <Button
//   //         onClick={() =>
//   //           addToast({ message: "This stays until closed.", duration: 0 })
//   //         }
//   //       >
//   //         No auto-dismiss
//   //       </Button>
//   //     </div>

//   //     {/*  */}
//   //   </div>
//   // );
//   return <Showcase />;
// }

function App() {
  return <Showcase />;
}
export default App;
