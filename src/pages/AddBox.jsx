import React from "react";
import AddingBox from "../components/AddBox/AddingBox";
import AddingButton from "../components/AddBox/AddingButton";

function AddBox({ addTodo, setTodo, todo }) {
  return (
    <>
      <div className="flex ">
        <AddingBox todo={todo} setTodo={setTodo} />
        <AddingButton addTodo={addTodo} />
      </div>
    </>
  );
}
export default AddBox;
