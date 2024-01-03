import React from "react";

function EditingBox({ setUpdateTodo, updatetodo }) {
  const updatingTheTextInEditbox = (event) => {
    setUpdateTodo({
      ...updatetodo,
      updatetext: event.target.value,
    });
  };
  return (
    <div className="w-[300px] h-[45px] ">
      <input
        type="text"
        value={updatetodo.updatetext}
        placeholder="Edit Your Todo Here...."
        className="w-[300px] h-[45px]  bg-blue-400 border border-slate-400 placeholder-red-500"
        onChange={updatingTheTextInEditbox}
      />
    </div>
  );
}
export default EditingBox;
