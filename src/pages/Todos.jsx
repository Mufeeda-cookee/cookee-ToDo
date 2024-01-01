import React from "react";
import Button from "../components/Button"

function Todos({ value, onEdit, onDelete }) {
  return (
    <div className="flex flex-col mt-[10px] items-center">
      <div className="w-[350px] h-[45px] justify-center items-center  border border-slate-400 bg-yellow-200 ">
        <div className="flex flex-row mt-3">
          <input
            type="checkbox"
            name=""
            id=""
            className="w-[20px] h-[20px] ml-1"
          />
          <p className="text-orange-500 font-semibold ml-2">{value}</p>
          <Button onEdit={onEdit} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
}

export default Todos;
