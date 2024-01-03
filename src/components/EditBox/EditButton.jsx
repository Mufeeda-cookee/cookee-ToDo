import React from "react";
import { AiOutlineEdit } from "react-icons/ai";

function EditButton({ updatetodo, setUpdateTodo, setTodos, todos }) {
  const handleUpdate = () => {
    const updatedTodos = [...todos];
    // here we are assigning the value of updatetodo from EditBox to the current todos list
    updatedTodos[updatetodo.index].text = updatetodo.updatetext;
    setTodos(updatedTodos);
    console.log(updatedTodos);
    setUpdateTodo(null);
  };
  return (
    <div className="flex cursor-pointer ml-3 mt-yyyy w-[40px] h-[40px] bg-blue-300 rounded-[52%] justify-center items-center">
      <AiOutlineEdit onClick={handleUpdate} />
    </div>
  );
}
export default EditButton;
