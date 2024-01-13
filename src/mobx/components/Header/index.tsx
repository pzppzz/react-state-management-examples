import { useState } from "react";
import { observer } from "mobx-react-lite";
import type { TodoListStore } from "@/mobx/TodoListStore";

export const Header: React.FC<{ store: TodoListStore }> = observer(
  ({ store }) => {
    console.log("Header re-rendered");
    const [todoName, setTodoName] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTodoName(e.target.value);
    };
    const handleAdd = () => {
      if (todoName.trim() !== "") {
        store.addTodo(todoName);
      }
      setTodoName("");
    };
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <input
          type="text"
          placeholder="请输入代办事项..."
          value={todoName}
          onChange={handleChange}
          style={{ flex: 1 }}
        />
        <button onClick={handleAdd} style={{ marginLeft: 4 }}>
          添加
        </button>
      </div>
    );
  }
);
