import { useState } from "react";
import { TQuestTypeItem } from "../interfaces/TQuestTypeItem"
import Button from "./button";
import UpsertQuestType from "./UpsertQuestType";

interface IQuestTypeProps {
    questType: TQuestTypeItem;
    onEdit: (values: TQuestTypeItem) => void;
    onDelete: () => void;
}
export default function QuestType({ questType, onEdit, onDelete }: IQuestTypeProps) {
    const [isEditting, setIsEditting] = useState(false);
    return <div className="text-white my-3">
        <div className="text-xl font-bold">Quest Type: {questType.id}</div>
        <div>{questType.description}</div>
        <div className="flex gap-2 items-center my-2">
            <Button text="Edit" onClick={() => {
                setIsEditting(true)
            }
            } />
            <Button text="Delete" onClick={() => onDelete()} />
        </div>
        {isEditting && <UpsertQuestType onFinish={(values) => { onEdit(values) }} data={questType} mode="update" onClose={() => setIsEditting(false)} />}
    </div>
}