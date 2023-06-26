import { useState } from "react";
import { DefinitionItem, TQuestTypeItem } from "../interfaces/TQuestTypeItem";
import Input from "./Input"
import Button from "./button"

interface IUpsertQuestTypeProps {
    mode: "update" | "add";
    onClose: () => void;
    onFinish: (values: TQuestTypeItem) => void;
    data?: TQuestTypeItem;
}
export default function UpsertQuestType({ mode, onClose, onFinish, data }: IUpsertQuestTypeProps) {
    const [values, setValues] = useState<TQuestTypeItem>({
        id: "",
        description: "",
        data: []
    });
    return <div className="text-white">
        <div className="flex items-center gap-3">
            <label>TypeId: </label>
            <Input defaultValue={mode === "update" ? data?.id : ""} onChange={(e) => setValues({ ...values, id: e.currentTarget.value })} />
        </div>
        <div className="flex items-center gap-3">
            <label>Description: {mode === "update" ? data?.description : ""}</label>
            <textarea className='bg-gray-500 text-white p-2 flex-auto rounded-md w-full my-4 mr-3' defaultValue={mode === "update" ? data?.description : ""} onChange={(e) => setValues({ ...values, description: e.currentTarget.value })} />
        </div>
        <div>
            <label>TypeData</label>
            <Button text="Add new definition" onClick={() => setValues({
                ...values, data: [...values.data, {
                    type: "number",
                    desc: "string",
                    label: "string"
                }]
            })} />
            <div>
                {mode === "update" ? data?.data.map((item, index) => <DefinitionItem key={index + "a"} item={item} />) : null}
                {values.data.map((item, index) => <DefinitionItem key={index + "b"} item={item} />)}
            </div>
        </div>
        <div>
            <Button text="Done" onClick={() => {
                onFinish(values)
                onClose()
            }
            } />
        </div>
    </div>
}


const DefinitionItem = ({ item }: { item: DefinitionItem }) => {
    return <div className="flex items-center gap-2">
        <Input />
        <select />
        <textarea />
        <Button text="del" />
    </div>
}