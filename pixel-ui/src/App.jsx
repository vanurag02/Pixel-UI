import "./index.css";
import Text from "./components/Text/Text";
import Label from "./components/Label/Label";
import Divider from "./components/Divider/Divider";

function App() {
  return (
    <div style={{ padding: "24px" }}>
      {/* Block */}
      <Divider />

      {/* Inset */}
      <Divider inset />

      {/* With text */}
      <Divider>Or</Divider>

      {/* Vertical - needs a parent with defined height */}
      <div style={{ display: "flex", height: "50px", alignItems: "center" }}>
        <span>Left</span>
        <Divider orientation="vertical" />
        <span>Right</span>
      </div>
    </div>
  );
}

export default App;
