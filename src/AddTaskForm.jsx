import React, { useState } from "react";
import EditBox from "./pages/EditBox";
import AddBox from "./pages/AddBox";
import Todos from "./pages/Todos";

function AddTaskForm() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [updatetodo, setUpdateTodo] = useState(null);

  const addTodo = () => {
    setTodos([...todos, { text: todo }]);
    setTodo("");
  };

  const onDelete = (index) => {
    setTodos(todos.filter((to, i) => i !== index));
  };

  const onEdit = (index) => {
    todos.map((todo, i) => {
      if (i === index) {
        setTodo("");
        setUpdateTodo({
          updatetext: todo.text,
          index: i,
        });
      }
      return todo;
    });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white mt-8 rounded-md shadow-md">
      <div className="flex flex-col justify-center items-center">
        <AddBox addTodo={addTodo} setTodo={setTodo} todo={todo} />
        {updatetodo && (
          <EditBox
            setUpdateTodo={setUpdateTodo}
            todos={todos}
            setTodos={setTodos}
            updatetodo={updatetodo}
          />
        )}
        {todos.map(
          (to, index) =>
            index !== updatetodo?.index && (
              <Todos
                key={index}
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
