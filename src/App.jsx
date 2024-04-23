import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {

  const [todoItems,  setTodoItems] = useState([]);
  const [newItem, setNewList] = useState("");

  const onNewItem = (itemName) => {
    
    console.log(itemName)
    const newTodo = [...todoItems, itemName]
    setTodoItems(newTodo)
  }
 
  return (
    <>
      <AppName />
      <AddTodo onNewItem={onNewItem} />
      <TodoList todoItems={todoItems} />
    </>
  );
}

export default App;
