import React from "react";
import {AiOutlineEdit} from "react-icons/ai"

function EditButton({handleUpdate}) {
  return (
    <div className="flex flex-row cursor-pointer ml-3 mt-yyyy w-[40px] h-[40px] bg-blue-300 rounded-[52%] justify-center items-center">
      <AiOutlineEdit onClick={handleUpdate} />
    </div>
  );
}
export default EditButton;
