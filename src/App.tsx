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
      data: [
        {
          label: "amout",
          type: "number",
          desc: "amout 1",
        },
      ],
    },
  ]);
  const [assumption, setAssumption] = useState<TAssumptionItem>({
    assumptions: [],
    userDescription: "",
  });

  const promt = `Generate quests (wrapped in <quests> tag) based on the assumptions provided in <assumptions> and the user description provided in <user_description>, strictly follow the format instructions provided in <format-instructions>.
Generated quests must fit the description of the available quest types, provided in <quest-types>.

Quest types:
<quest-types>
- Quest type "receive_money". Receive money from another sources. This quest requires user to receive more than a certain amount of money. Its typeData must have a field named amount. the minimum amount that user should receive to complete the quest
- Quest type "pay_bills_via_qr". This quest requires user to pay his bills multiple times. Its typeData must have a field named amount. The amount user is willing to pay
- Quest type "end_of_day_balance". This quest requires user to keep his balance till the end of day. Its typeData must have a field named amount. The amount user have to keep in his balance
- Quest type "transfer". This quest requires user to make transfer transactions. Its typeData must have a field named amount. The amount user have to transfer
- Quest type "saving". This quest requires user to deposit money into his saving account. Its typeData must have a field named amount. The amount user have to deposit
</quest-types>

Assumptions:
<assumptions>
- User usually spend 1k to pay bills
- User with income more than 5k often deposit 1k to his saving account
- Don't show "pay_bills_via_qr" to user without saving account.
- Encourage user with income less than 5k to receive at least 500 a day.
- generate exactly 2 quests
</assumptions>

User description:
<user_description>
This user often pay the bills. His income is 2k. He doesn't have a saving account
</user_description>

Format instructions:
<format-instructions>
Output a json object or array fitting the schema provided in <schema>, based on the PROMPT section below.
Code only, no commentary, no introduction sentence, no codefence block.
You are generating json - make sure to escape any double quotes.
If you are not sure or cannot generate something for any possible reason, return:
{{"error" : <the reason of the error>}};

<schema>
{"type":"array","items":{"type":"object","properties":{"typeId":{"type":"string"},"typeData":{"type":"object","additionalProperties":{}},"minimalHumanTitle":{"type":"string"}},"required":["typeId","typeData","minimalHumanTitle"],"additionalProperties":false},"$schema":"http://json-schema.org/draft-07/schema#"}
</schema>
</format-instructions>
`;
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
