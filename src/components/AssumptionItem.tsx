import Button from "./button";

interface AssumptionItemProps {
    id: number;
    content?: string;
    onDelete: (id: number) => void
}

export default function AssumptionItem({id, content, onDelete}: AssumptionItemProps) {
    return <div className="flex items-center gap-2 text-white">
        <div>{content}</div>
        <Button text="del" onClick={() => onDelete(id)}/>
    </div>
}