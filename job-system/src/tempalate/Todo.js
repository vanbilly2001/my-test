import React from "react";

const Todo = (props) => {
  const { todos, title, handleDelete } = props;
  const handleDeleteX = (id) => {
    handleDelete(id); //lấy id cần xóa
  };
  return (
    <div>
      <div className="todo">
        <div className="title">{title}</div>
        {todos.map((item) => {
          return (
            <div key={item.id}>
              <li className="todo-child">
                {item.title}{" "}
                <span onClick={() => handleDeleteX(item.id)}>X</span>
              </li>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Todo;
