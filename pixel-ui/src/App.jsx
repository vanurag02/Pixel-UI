import { useState } from "react";
import "./index.css";

import Popover from "./components/Popover/Popover";
import Button from "./components/Button/Button";
import Text from "./components/Text/Text";

function App() {
  const [opened, setOpened] = useState(false);
  const [opened2, setOpened2] = useState(false);

  return (
    <div style={{ display: "flex", gap: "24px", padding: "80px" }}>
      {/* Bottom — default */}
      <Popover
        trigger={
          <Button onClick={() => setOpened(!opened)}>Open Popover</Button>
        }
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <Text size="sm" weight="semibold">
          Popover title
        </Text>
        <Text size="sm" color="secondary">
          This is some popover content.
        </Text>
      </Popover>

      {/* Top */}
      <Popover
        trigger={<Button onClick={() => setOpened2(!opened2)}>Open Top</Button>}
        opened={opened2}
        onClose={() => setOpened2(false)}
        position="top"
      >
        <Text size="sm">Content above the trigger.</Text>
      </Popover>
    </div>
  );
}

export default App;
