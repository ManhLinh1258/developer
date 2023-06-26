import React from "react";
import { HiPlusCircle } from "react-icons/hi";

function Assumption() {
  return (
    <div>
      <button className="bg-green-400 text-white h-[60px] mt-3 gap-2 px-4 py-2 rounded-md w-full ">
        <span className=" text-xl"> Generate quests</span>
      </button>
      <button className="bg-gray-500 text-white  mt-3 gap-2 px-4 py-2 rounded-md w-full ">
        <span> Export configs</span>
      </button>
      <button className="bg-gray-500 text-white  mt-3 gap-2 px-4 py-2 rounded-md w-full ">
        <span> Imports configs</span>
      </button>
      <button className="bg-gray-500 text-white  mt-3 gap-2 px-4 py-2 rounded-md w-full ">
        <span> Reset configs to default</span>
      </button>
      <div className="my-3 border-b-2 w-full border-[#0000FF] shadow-none rounded-none "></div>
      <div className="text-white text-xl">User description</div>
      <textarea
        className="bg-gray-500 text-white p-2 rounded-md w-full my-4"
        rows={4}
      ></textarea>
      <div className="text-white text-xl">Assumptions</div>
      <div className="flex ">
        <input className="bg-gray-500 text-white p-2 flex-auto rounded-md w-full my-4 mr-3"></input>
        <button className="flex-auto h-[40px] bg-blue-500 items-center text-white  gap-2 px-2 py-1 rounded-md ">
          <HiPlusCircle />
        </button>
      </div>
    </div>
  );
}

export default Assumption;
