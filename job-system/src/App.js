// import "./App.css";
import "./static/style.css";
import "./static/cssAdmin.css";
import "./static/cssCandidate/bootstrap.min.css";
import "./static/vendor/bootstrap/css/bootstrap.min.css";
import "./static/cssCandidate/style.css";
import LoginCan from "./tempalate/LoginCan";
import LoginRecuiter from "./tempalate/LoginRecruiter";
import RegisterRecruiter from "./tempalate/RegisterRecruiter";
import RegisterCan from "./tempalate/RegisterCan";
import LoginAdmin from "./tempalate/LoginAdmin";
import { useState } from "react";
import Todo from "./tempalate/Todo";
import Covid from "./tempalate/Covid";

function App() {
  let [name, setName] = useState("Van");
  const [address, setAddress] = useState("");
  const [todo, setTodo] = useState([
    { id: 1, title: "Dung", by: "123" },
    { id: 2, title: "Tien", by: "123" },
    { id: 3, title: "Tung", by: "312" },
  ]);

  const handleOnChange = (event) => {
    setAddress(event.target.value); //thay đổi value
  };

  const handleOnClick = (event) => {
    if (!address) {
      alert("Vui long nhap");
      return;
    }
    let to = { id: Math.floor(Math.random() * 10000 + 1), title: address }; // id random
    setTodo([...todo, to]); //...todo để giữ lại dũ liệu của todo cũ
    setAddress(""); //làm cho address rỗng lại
  };

  const handleDelete = (id) => {
    let test = todo;
    test = test.filter((i) => i.id !== id); //filter lấy id cần phải xóa và nó phải khác những id còn lại trong mảng
    setTodo(test); //resert mảng
  };

  return (
    <div>
      <div className="App">
        <h1>Hello mình tên là {name}</h1>
      </div>

      <Covid></Covid>
      {/* <Todo todos={todo} handleDelete={handleDelete}></Todo>

      <Todo
        title={"Duoc tao boi 123"}
        todos={todo.filter((item) => item.by === "123")} //filter để duyệt(lọc) từng phần tử trong mảng array
        handleDelete={handleDelete}
      />
      <input
        type="text"
        value={address}
        onChange={(event) => handleOnChange(event)}
      />
      <button type="button" onClick={(event) => handleOnClick(event)}>
        Click
      </button> */}
    </div>
  );
}

export default App;
