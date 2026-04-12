import { useState } from "react";
import "./index.css";
import { useToast } from "./components/Toast/ToastContext";

import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return (
    <div style={{ padding: "24px", maxWidth: "500px" }}>
      {/* Single open at a time — default */}
      <Accordion defaultValue="item1">
        <AccordionItem value="item1" label="What is Pixel UI?">
          Pixel UI is a custom React component library built with a token-based
          design system.
        </AccordionItem>
        <AccordionItem value="item2" label="How do I install it?">
          Clone the repository and import components directly into your React
          project.
        </AccordionItem>
        <AccordionItem value="item3" label="Is it free to use?">
          Yes, Pixel UI is completely open source and free to use.
        </AccordionItem>
        <AccordionItem value="item4" label="Disabled item" disabled>
          This content is not accessible.
        </AccordionItem>
      </Accordion>

      {/* Multiple open at a time */}
      <div style={{ marginTop: "24px" }}>
        <Accordion multiple defaultValue={["q1", "q2"]}>
          <AccordionItem value="q1" label="Can multiple items be open?">
            Yes — pass the multiple prop to allow multiple items open
            simultaneously.
          </AccordionItem>
          <AccordionItem value="q2" label="Can I set a default open item?">
            Yes — use the defaultValue prop with a value string or array of
            strings.
          </AccordionItem>
          <AccordionItem value="q3" label="Does it animate?">
            Yes — the panel smoothly expands and collapses with a CSS
            transition.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default App;
