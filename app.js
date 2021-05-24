import React,{useState} from 'react';
import ReactDOM from 'react-dom';
 function App (){
   
const [todos,setTodos]=useState(['take dogs for a walk'])
const [input,setInput]=useState("");
   
   const addTodo=(event)=>{
     setTodos([...todos,input])
     event.preventDefault();
     setInput("")
     
   }
   
    const removetodo = (id) => {
  const newTodos = [...todos];
  newTodos.splice(id, 1);
 setTodo(newTodos);
};

   
   return(
     <div>
     <h1>✍️Todo App</h1>
     <form>
         <input value={input} onChange={event=>setInput(event.target.value)}/>
      
      <button onClick={addTodo}>👇Add Todos</button>
      </form>
      <ul>
      
     {todos.map(todo =>(
     <li>{todo}<button onClick={() => removetodo(id)}>remove</button>
     
     </li>
     ))}
     
     </ul>
     
     </div>
  );
   
 };

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
