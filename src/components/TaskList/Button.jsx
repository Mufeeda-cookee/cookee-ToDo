
import React from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const Button = ({ onEdit, onDelete }) => {
  return (
    <button className="flex cursor-pointer text-2xl ml-auto">
      <AiOutlineEdit className="text-blue-500" onClick={onEdit} />
      <AiOutlineDelete className="text-red-500" onClick={onDelete} />
    </button>
  );
};

export default Button;
