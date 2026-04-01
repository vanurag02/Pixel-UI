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

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        padding: "24px",
      }}
    >
      {/* Default — with overflow indicator */}
      <AvatarGroup max={4}>
        <Avatar initials="JD" />
        <Avatar initials="MR" />
        <Avatar initials="AS" />
        <Avatar initials="PL" />
        <Avatar initials="KW" />
        <Avatar initials="RB" />
      </AvatarGroup>

      {/* Spacing variants */}
      <AvatarGroup spacing="sm">
        <Avatar initials="JD" />
        <Avatar initials="MR" />
        <Avatar initials="AS" />
      </AvatarGroup>

      <AvatarGroup spacing="md">
        <Avatar initials="JD" />
        <Avatar initials="MR" />
        <Avatar initials="AS" />
      </AvatarGroup>

      <AvatarGroup spacing="lg">
        <Avatar initials="JD" />
        <Avatar initials="MR" />
        <Avatar initials="AS" />
      </AvatarGroup>

      {/* With images */}
      <AvatarGroup max={3}>
        <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" />
        <Avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" />
        <Avatar src="https://i.pravatar.cc/150?img=3" alt="User 3" />
        <Avatar src="https://i.pravatar.cc/150?img=4" alt="User 4" />
        <Avatar src="https://i.pravatar.cc/150?img=5" alt="User 5" />
      </AvatarGroup>
    </div>
  );
}

export default App;
