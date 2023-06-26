import Button from "./button";

interface AssumptionItemProps {
    id: string;
    content: string;
}

export default function AssumptionItem({id, content}: AssumptionItemProps) {
    return <div>
        <div>{content}</div>
        <Button text="del"/>
    </div>
}