import React, { useState } from "react";
import EditBox from "./pages/EditBox";
import AddBox from "./pages/AddBox";
import Todos from "./pages/Todos";

function AddTaskForm() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [updatetodo, setUpdateTodo] = useState(null);

  const addTodo = (index) => {   
    setTodos([...todos, { text: todo, index: index }]);
    setTodo("");
  };

  const onDelete = (index) => {
    setTodos(todos.filter((to, i) => i !== index));
  };

  const onEdit = (index) => {
    const editTodo = todos[index];
    setTodo("");
    setUpdateTodo({
      updatetext: editTodo.text,
      index: editTodo.index,
    });
  };

  const handleUpdate = () => {
    if (updatetodo) {
      const updatedTodos = todos.map((to) =>
        to.index === updatetodo.index
          ? {
              ...to,
              text: updatetodo.updatetext,
            }
          : to
      );
      setTodos(updatedTodos);
      setUpdateTodo(null);
    }
  };
  const updatingTheTextInEditbox = (event) => {
    setUpdateTodo({
      ...updatetodo,
      updatetext: event.target.value,
    });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white mt-8 rounded-md shadow-md">
      <div className="flex flex-col justify-center items-center">
        <AddBox addTodo={addTodo} setTodo={setTodo} todo={todo} />
        {updatetodo && (
          <EditBox
            updatingTheTextInEditbox={updatingTheTextInEditbox}
            value={updatetodo.updatetext}
            handleUpdate={handleUpdate}
            setUpdateTodo={setUpdateTodo}
          />
        )}
        {todos.map(
          (to, index) =>
            to.index !== updatetodo?.index && (
              <Todos
                key={index}
                todo={to}
                value={to.text}
                onEdit={() => onEdit(index)}
                onDelete={() => onDelete(index)}
              />
            )
        )}
      </div>
    </div>
  );
}

export default AddTaskForm;
