import React from "react";

const TodoList = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-5">Buy Milk</div>
        <div className="col-5">10-25-2022</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
