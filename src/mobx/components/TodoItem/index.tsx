import { TodoListState } from "@/react-context/TodoListContext";
import { ITodo } from "@/types";
import { observer } from "mobx-react-lite";

export type TodoItemProps = Pick<TodoListState, "toggleTodo" | "deleteTodo"> & {
  order: number;
  todo: ITodo;
};

export const TodoItem: React.FC<TodoItemProps> = observer((props) => {
  const { todo } = props;
  console.log(`TodoItem ${todo.name} re-rendered`);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "6px 0",
      }}
    >
      <div>{props.order}</div>
      <div
        style={{
          flex: 1,
          margin: "0 12px",
          textDecoration: todo.done ? "line-through" : "none",
        }}
      >
        {todo.name}
      </div>
      <div>
        <label htmlFor="">
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => props.toggleTodo(todo.id)}
          />
          <span style={{ fontSize: 14, marginLeft: 6 }}>
            {todo.done ? "已完成" : "未完成"}
          </span>
        </label>
      </div>
      <div>
        <button
          style={{ marginLeft: 6 }}
          onClick={() => props.deleteTodo(todo.id)}
        >
          删除
        </button>
      </div>
    </div>
  );
});
