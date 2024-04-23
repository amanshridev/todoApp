import React from 'react'

const TodoList = ({ todoItems }) => {
  return (
    <div>
      <>
      {todoItems?.map((todo, index) => {
        return(<div key={index}>{todo}</div>)
      })}
      </>
    </div>
  )
}

export default TodoList