import { useState } from 'react'


function App() {
  const [todos,setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);


 const handleForm = (e) => {
  e.preventDefault();
  setTodoList([...todoList, {todoName: todos}]);
  setTodo("");

  };
  const deleteTodo = (deleteValue) => {
    const resTodoList = [...todoList.filter((val) => {
      return val.todoName !== deleteValue;
    }),
  ];
  setTodoList(resTodoList);
  };

  return (
  <div>
    <div className="w-[500px] mx-auto text-center bg-white p-5"> 
      <h1 className="text-5xl font-bold md-8">Todo List</h1>

      <form onSubmit={handleForm}>
        <input className="border-2 placeholder:text-gray-500 rounded-lg border-black w-full p-5 mb-5 text-black" type="text" 
        placeholder="Add Todo"
        value={todos}
        onChange={(e) => setTodo(e.target.value)}
        />

        <button type="submit" >Add Todo</button>
      </form>

      <div >
        <ul>
          {todoList.map((todo, index) => {

          return (
            <li 
              key={index}

            >
            {todo.todoName} {" "}

             <span onClick={() => deleteTodo(todo.todoName) }>Clear</span>
          </li>
          );
          })}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default App
