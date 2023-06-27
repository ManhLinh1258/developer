import { useState, useEffect } from "react";
import { DefinitionItem, TQuestTypeItem } from "../interfaces/TQuestTypeItem";
import Input from "./Input";
import Button from "./button";
import { HiOutlineTrash, HiPencil } from "react-icons/hi";

interface IUpsertQuestTypeProps {
  mode: "update" | "add";
  onClose: () => void;
  onFinish: (values: TQuestTypeItem) => void;
  data?: TQuestTypeItem;
}
export default function UpsertQuestType({
  mode,
  onClose,
  onFinish,
  data,
}: IUpsertQuestTypeProps) {
  const [values, setValues] = useState<TQuestTypeItem>({
    id: "",
    description: "",
    data: [],
  });
  useEffect(() => {
    if (mode === "update" && Object.entries(data as any).length > 0) {
      const typedData: TQuestTypeItem = data as TQuestTypeItem;
      setValues(typedData);
    }
  }, []);

  return (
    <div className="text-white">
      <div className="flex items-center gap-3">
        <label className="w-[90px]">TypeId: </label>
        <Input
          defaultValue={mode === "update" ? data?.id : ""}
          onChange={(e) => setValues({ ...values, id: e.currentTarget.value })}
        />
      </div>
      <div className="flex items-center gap-3 my-3">
        <label>Description: </label>
        <textarea
          className="bg-gray-500 p-2 flex-auto rounded-md w-full my-4 "
          defaultValue={mode === "update" ? data?.description : ""}
          onChange={(e) =>
            setValues({ ...values, description: e.currentTarget.value })
          }
        />
      </div>
      <div>
        <label>TypeData</label>
        <Button
          className="my-2"
          text="Add new definition"
          onClick={() =>
            setValues({
              ...values,
              data: [
                ...values.data,
                {
                  type: "",
                  desc: "",
                  label: "",
                },
              ],
            })
          }
        />
        <div>
          {/* {mode === "update"
            ? data?.data.map((item, index) => (
                <DefinitionItem
                  key={index + "a"}
                  item={item}
                  index={index}
                  setValues={setValues}
                />
              ))
            : null} */}
          {values.data.map((item, index) => (
            <DefinitionItem
              key={index + "b"}
              index={index}
              setValues={setValues}
              item={item}
            />
          ))}
        </div>
      </div>
      <div>
        <Button
          icon={<HiPencil />}
          className="my-2"
          text="Done"
          onClick={() => {
            onFinish(values);
            onClose();
          }}
        />
      </div>
    </div>
  );
}

const DefinitionItem = ({
  item,
  index,
  setValues,
}: {
  item: DefinitionItem;
  index: number;
  setValues: React.Dispatch<React.SetStateAction<TQuestTypeItem>>;
}) => {
  const handleChangeDefinition = (e: any, index: number) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues((prevValues: any) => {
      const copyDatas = JSON.parse(JSON.stringify(prevValues.data));
      const newDatas = copyDatas.reduce(
        (prevData: any, curData: any, indexCopy: any) => {
          const newData =
            index === indexCopy ? { ...curData, [name]: value } : curData;
          return [...prevData, newData];
        },
        []
      );
      return {
        ...prevValues,
        data: newDatas,
      };
    });
  };

  const handleRemove = (index: number) => {
    setValues((prevValues: any) => {
      const copyDatas = JSON.parse(JSON.stringify(prevValues.data));
      const newDatas = copyDatas.filter(
        (d: any, indexData: any) => index !== indexData
      );

      return {
        ...prevValues,
        data: newDatas,
      };
    });
  };
  return (
    <div className="flex  gap-2">
      <Input
        className="h-[25px]"
        value={item.label}
        name="label"
        onChange={(e) => handleChangeDefinition(e, index)}
      />
      <select
        value={item.type}
        name="type"
        className="bg-gray-500 h-[25px] text-white rounded-md"
        onChange={(e) => handleChangeDefinition(e, index)}
      >
        <option value="string">String</option>
        <option value="number">Number</option>
        <option value="boolean">Boolean</option>
      </select>
      <textarea
        value={item.desc}
        onChange={(e) => handleChangeDefinition(e, index)}
        name="desc"
        className="bg-gray-500 text-white  rounded-md w-full  "
      />
      <Button
        className="h-[25px]"
        icon={<HiOutlineTrash className="text-red-500" />}
        onClick={() => handleRemove(index)}
      />
    </div>
  );
};
