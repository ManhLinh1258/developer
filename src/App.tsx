import react, { useState } from "react";
import QuestTypes from "./pages/QuestTypes";
import Assumption from "./pages/Assumption";
import GeneratedQuest from "./pages/GeneratedQuest";
import Prompt from "./pages/Prompt";

function App() {
  return (
    <div className=" bg-slate-900">
      <div className="grid grid-cols-4 gap-7 p-4">
        <QuestTypes />
        <Assumption />
        <GeneratedQuest />
        <Prompt />
      </div>
    </div>
  );
}

export default App;
