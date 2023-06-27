import React, { useEffect, useState } from "react";
import { generateMessage } from "../helpers/generateMessage";

function GeneratedQuest({ promt }: { promt: string }) {
  const [result, setResult] = useState("");

  useEffect(() => {
    const getMessage = async () => {
      const mess = await generateMessage(promt);
      setResult(mess);
    };
    getMessage();
  }, [promt]);
  return (
    <div>
      <div className="text-white text-xl mt ">
        Generated Quest
        <div className="mt-4 m border-b-2 w-full border-[#0000FF] shadow-none rounded-none "></div>
      </div>
      <textarea
        rows={20}
        className="bg-gray-700 text-white p-2 rounded-md w-full my-4"
        value={result}
      ></textarea>
      <div></div>
    </div>
  );
}

export default GeneratedQuest;
