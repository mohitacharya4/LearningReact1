import TabButton from "./TabButton";
import { EXAMPLES } from "../data.js";
import { useState } from "react";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [tabContent, setTabContent] = useState();

  function handleSelect(selectedButton) {
    setTabContent(selectedButton);
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs ButtonsContainer="menu" buttons={<><TabButton
          isSelected={tabContent === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={tabContent === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={tabContent === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={tabContent === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton></>}>{!tabContent ? (
        <p>Please select a topic.</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[tabContent].title}</h3>
          <p>{EXAMPLES[tabContent].description}</p>
          <pre>
            <code>{EXAMPLES[tabContent].code}</code>
          </pre>
        </div>
      )}</Tabs>      
    </Section>
  );
}
