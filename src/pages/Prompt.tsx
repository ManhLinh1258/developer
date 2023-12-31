function Prompt({ promt }: { promt: string }) {
  return (
    <div>
      <div className="text-white text-xl mt ">
        Prompt
        <div className="mt-4 m border-b-2 w-full border-[#0000FF] shadow-none rounded-none "></div>
      </div>
      <textarea
        rows={20}
        className="bg-gray-500 text-white p-2 rounded-md w-full my-4"
        value={promt}
      ></textarea>
    </div>
  );
}

export default Prompt;
