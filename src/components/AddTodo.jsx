import { useState } from 'react'

const AddTodo = ({ onNewItem }) => {

  const [inputData, setInputData] = useState("");

  const inputValue = (e) => {
    setInputData(e.target.value)
  }

  const handleButton = () => {
    onNewItem(inputData);
    setInputData("");
  }

  return (
    <><input type="text" name="" id="" onChange={inputValue} value={inputData} />
    <button onClick={handleButton}>Add todo</button></>
  )
}

export default AddTodo