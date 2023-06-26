import { useState } from "react";
import Assumption from "./pages/Assumption";
import GeneratedQuest from "./pages/GeneratedQuest";
import Prompt from "./pages/Prompt";
import QuestTypes from "./pages/QuestTypes";
import { TQuestTypeItem } from "./interfaces/TQuestTypeItem";
import { TAssumptionItem } from "./interfaces/TAssumptionItem";
import { generateMessage } from "./helpers/generateMessage";

function App() {
  const [questTypes, setQuestTypes] = useState<TQuestTypeItem[]>([
    {
      id: "receive_money",
      description: "abczysdsofjd",
      data: [{
        label: "amout",
        type: "number",
        desc: "fdsfd"
      }
      ]
    }
  ])
  const [assumption, setAssumption] = useState<TAssumptionItem>({
    assumptions: [],
    userDescription: ""
  });

  const promt = `Generate quests (wrapped in <quests> tag) based on the assumptions provided in <assumptions> 
  and the user description provided in <user_description>, strictly follow the format instructions provided in  
  <format-instructions >. Generated quests must fit the description of the available quest types, provided in <quest-types>.

  Quest types:
  < quest-types> 
  ${questTypes.map(item => `- ${item.id}.${item.description}`)}
  </quest-types> 

  Assumptions:
  <assumptions>
  ${assumption.assumptions.map(item => `- ${item}`)}
  </assumptions> 

  User description:
  <user_description>
  ${assumption.userDescription}
  </user_description > 

  Format instructions:
  < format-instructions > 
  Output a json object or array fitting the schema provided in <schema>, based on the PROMPT section below.
  Code only, no commentary, no introduction sentence, no codefence block.
  You are generating json - make sure to escape any double quotes.
  If you are not sure or cannot generate something for any possible reason, return:
  {
    {
      "error": <the reason of the error>}};
        <schema>
          {
            "type":"array", 
            "items":{
              "type": "object",
              "properties":{"typeId":{"type":"string"},
              "typeData":{
                "type":"object",
                "additionalProperties":{ }},
                "minimalHumanTitle":{"type":"string"}},
                "required":["typeId","typeData","minimalHumanTitle"],
                "additionalProperties":false},
                "$schema":"http://json-schema.org/draft-07/schema#"
              }
        </schema>
      </format-instructions>`
  return (
    <div className=" bg-slate-900">
      <div className="grid grid-cols-4 gap-7 p-4">
        <QuestTypes questTypes={questTypes} setQuestTypes={setQuestTypes} />
        <Assumption assumption={assumption} setAssumption={setAssumption} />
        <GeneratedQuest promt={promt} />
        <Prompt promt={promt} />
      </div>
    </div>
  );
}

export default App;
