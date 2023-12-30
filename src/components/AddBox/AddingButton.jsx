import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

function AddingButton({addTodo}) {
  return (
    <div className="flex flex-row cursor-pointer ml-3 w-[40px] h-[40px] bg-green-300 rounded-[52%] justify-center items-center">
      <AiOutlinePlus onClick={addTodo} />
    </div>
  );
}
export default AddingButton;
