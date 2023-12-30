import React from "react";

function EditingBox({ value, updatingTheTextInEditbox }) {
  return (
    <input
      type="text"
      value={value}
      placeholder="🖊️ Update item..."
      className="w-[300px] h-[45px]  bg-blue-400 border border-slate-400"
      onChange={updatingTheTextInEditbox}
    />
  );
}
export default EditingBox;
