import React from "react";
import EditingBox from "../components/EditBox/EditingBox";
import EditButton from "../components/EditBox/EditButton";

function EditBox({ updatetodo, setUpdateTodo, todos, setTodos }) {
  return (
    <>
      <div className="flex flex-col mt-4 justify-center items-center">
        <div className="flex  ">
          <EditingBox setUpdateTodo={setUpdateTodo} updatetodo={updatetodo} />
          <EditButton
            todos={todos}
            setTodos={setTodos}
            updatetodo={updatetodo}
            setUpdateTodo={setUpdateTodo}
          />
        </div>
      </div>
    </>
  );
}
export default EditBox;
