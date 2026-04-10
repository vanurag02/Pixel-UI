import { useState } from "react";
import "./index.css";
import Dialog from "./components/Dialog/Dialog";
import Button from "./components/Button/Button";
import Text from "./components/Text/Text";

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ padding: "24px" }}>
      <Button onClick={() => setOpened(true)}>Open Dialog</Button>

      <Dialog
        opened={opened}
        onClose={() => setOpened(false)}
        title="Confirm action"
        size="md"
      >
        <Text color="primary">
          Are you sure you want to delete this item? This action cannot be
          undone.
        </Text>
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginTop: "24px",
            justifyContent: "flex-end",
          }}
        >
          <Button variant="outline" onClick={() => setOpened(false)}>
            Cancel
          </Button>
          <Button color="error" onClick={() => setOpened(false)}>
            Delete
          </Button>
        </div>
      </Dialog>
    </div>
  );
}

export default App;
