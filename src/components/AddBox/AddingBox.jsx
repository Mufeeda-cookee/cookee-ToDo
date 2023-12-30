import React from "react";

function AddingBox({todo,setTodo}){
    return(
        <input
          type="text"
          onChange={(event) => setTodo(event.target.value)}
          value={todo}
          placeholder="🖊️ Add item..."
          className="w-[300px] h-[40px] bg-green-400 border border-slate-400 placeholder-red-500"
        />
    )

}
export default AddingBox