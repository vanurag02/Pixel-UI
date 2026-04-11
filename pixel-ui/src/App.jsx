import { useState } from "react";
import "./index.css";
import Drawer from "./components/Drawer/Drawer";
import Button from "./components/Button/Button";
import Text from "./components/Text/Text";

function App() {
  const [right, setRight] = useState(false);
  const [left, setLeft] = useState(false);
  const [bottom, setBottom] = useState(false);

  return (
    <div style={{ display: "flex", gap: "12px", padding: "24px" }}>
      <Button onClick={() => setRight(true)}>Right Drawer</Button>
      <Button onClick={() => setLeft(true)}>Left Drawer</Button>
      <Button onClick={() => setBottom(true)}>Bottom Drawer</Button>

      <Drawer
        opened={right}
        onClose={() => setRight(false)}
        title="Right Drawer"
        position="right"
      >
        <Text color="secondary">This drawer slides in from the right.</Text>
      </Drawer>

      <Drawer
        opened={left}
        onClose={() => setLeft(false)}
        title="Left Drawer"
        position="left"
      >
        <Text color="secondary">This drawer slides in from the left.</Text>
      </Drawer>

      <Drawer
        opened={bottom}
        onClose={() => setBottom(false)}
        title="Bottom Drawer"
        position="bottom"
      >
        <Text color="secondary">This drawer slides in from the bottom.</Text>
      </Drawer>
    </div>
  );
}

export default App;
