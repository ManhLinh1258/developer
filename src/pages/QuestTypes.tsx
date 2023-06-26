import { useState } from "react";
import QuestType from "../components/QuestType";
import { TQuestTypeItem } from "../interfaces/TQuestTypeItem";
import UpsertQuestType from "../components/UpsertQuestType";

function QuestTypes() {

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

  const [isAdding, setIsAdding] = useState(false);
  return (
    <div>
      <div className="text-white text-xl">
        Quest Types
        <div className="mt-4 m border-b-2 w-full border-[#0000FF] shadow-none rounded-none "></div>
      </div>
      <button className="bg-blue-500 text-white w-full items-center gap-2 px-4 py-2 rounded-md"
        onClick={() => setIsAdding(true)}
      >
        <span>
          {/* <HiPlusCircle className="items-center" />  */}
          Add New Quest Types

        </span>
      </button>
      {isAdding && <UpsertQuestType mode="add" onClose={() => setIsAdding(false)} onFinish={(values) => setQuestTypes((val) => [...val, values])} />}
      <div>
        {questTypes.map((qt, index) => <QuestType onDelete={() => setQuestTypes(val => ([...val.filter(item => item.id !== qt.id)]))} onEdit={(values) => setQuestTypes(val => ([...val.filter(item => item.id !== qt.id), values]))} questType={qt} key={index} />)}
      </div>
    </div>
  );
}

export default QuestTypes;
