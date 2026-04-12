import { useState } from "react";
import "./index.css";
import { useToast } from "./components/Toast/ToastContext";

import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";
import Field from "./components/Field/Field";
import Input from "./components/Input/Input";
import Select from "./components/Select/Select";
import SelectOption from "./components/Select/SelectOption";
import Textarea from "./components/Textarea/Textarea";
import Image from "./components/Image/Image";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        padding: "24px",
      }}
    >
      {/* Basic */}
      <Image
        src="https://picsum.photos/200/150"
        alt="Sample"
        width={200}
        height={150}
      />

      {/* Radius */}
      <Image
        src="https://picsum.photos/200/150"
        alt="Sample"
        width={200}
        height={150}
        radius="lg"
      />
      <Image
        src="https://picsum.photos/150"
        alt="Sample"
        width={150}
        height={150}
        radius="pill"
      />

      {/* Fit */}
      <Image
        src="https://picsum.photos/400/200"
        alt="Sample"
        width={200}
        height={150}
        fit="contain"
      />

      {/* Fallback */}
      <Image
        src="invalid-url.jpg"
        alt="Broken"
        width={200}
        height={150}
        fallback="https://picsum.photos/200/150"
      />

      {/* Lazy loading */}
      <Image
        src="https://picsum.photos/200/150?random=1"
        alt="Lazy"
        width={200}
        height={150}
        lazy
      />
    </div>
  );
}

export default App;
