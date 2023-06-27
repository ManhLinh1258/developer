import { HiOutlineTrash } from "react-icons/hi";
import Button from "./button";

interface AssumptionItemProps {
  id: number;
  content?: string;
  onDelete: (id: number) => void;
}

export default function AssumptionItem({
  id,
  content,
  onDelete,
}: AssumptionItemProps) {
  return (
    <div className="flex items-start gap-2 text-white">
      <div
        className="flex-shrink-0"
        style={{ wordWrap: "break-word", width: "230px" }}
      >
        {content}
      </div>
      <div className="flex-grow"></div>
      <div className="ml-auto">
        <Button
          className=""
          icon={<HiOutlineTrash className="text-red-500" />}
          onClick={() => onDelete(id)}
        />
      </div>
    </div>
  );
}
