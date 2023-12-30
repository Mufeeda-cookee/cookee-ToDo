






















//Description...........

















import React, { useState } from "react";
import TaskList from "../pages/TaskList";
import EditBox from "../pages/EditBox";
import AddBox from "../pages/AddBox";

function AddTaskForm() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [updatetodo, setUpdateTodo] = useState(null);
  //for handle adding
  const addTodo = (index) => {
    setTodos([...todos, { text: todo, index: index }]);    //storing added todos in to array todos,here i passed an parameter called index from map 
    setTodo("");
  };

  const onDelete = (index) => {
    setTodos(todos.filter((to, i) => i !== index));
  };

  const onEdit = (index) => {//got index from mapping the todos 
    const editTodo = todos[index]; //assign index of each todo to editTodo
    setTodo("");
    setUpdateTodo({
      updatetext: editTodo.text,//to get the text from the todos(but react dont know whose text it is )
      index: editTodo.index,//so,to get particular one's text ,specify the index
    });

  };

  const handleUpdate = () => {
    //we are checking the updatetodo to handle the update(ie,if selected one to be edited then only the need of handling the update)
    if (updatetodo) {
      const updatedTodos = todos.map((to) =>
        to.index === updatetodo.index//checking the index of one to be edited equal to the index of items in todos 
          ? {
              ...to,//if yes ,display the todo
              text: updatetodo.updatetext,// with specific text
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
    <div className="max-w-xl mx-auto p-4 bg-white mt-8 rounded-md shadow-md">
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
        {todos.map((to, index) =>to.index !== updatetodo?.index && (
              <TaskList
                key={index}
                todo={to}
                value={to.text}
                onEdit={() => onEdit(index)}
                onDelete={() => onDelete(index)}
                addTodo={() => addTodo(index)}


              />
            )
        )}
      </div>
    </div>
  );
}

export default AddTaskForm;
