import React from "react";
import Checkbox from "../components/TaskList/Checkbox";
import Text from "../components/TaskList/AddText";
import Button from "../components/TaskList/Button";

function TaskList({ value,onEdit, onDelete }) {
  return (
    <div className="flex flex-col mt-[10px] items-center">
      <div className="w-[350px] h-[45px] justify-center items-center  border border-slate-400 bg-yellow-200 ">
        <div className="flex flex-row mt-3">
          <Checkbox />
          <Text value={value}/>
          <Button onEdit={onEdit} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
}

export default TaskList;
