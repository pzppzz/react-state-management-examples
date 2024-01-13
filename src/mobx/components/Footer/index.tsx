import type { TodoListStore } from "@/mobx/TodoListStore";
import { observer } from "mobx-react-lite";

export const Footer: React.FC<{ store: TodoListStore }> = observer(
  ({ store }) => {
    console.log("Footer re-rendered");
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 6,
        }}
      >
        <div>
          <input
            type="checkbox"
            checked={store.checkAll}
            onChange={store.checkAllTodo}
            disabled={!store.total}
          />
          <span>已完成{store.doneCount + "/" + store.total}</span>
        </div>
        <div>
          <button onClick={store.deleteAllDone} disabled={!store.doneCount}>
            清除已完成
          </button>
        </div>
      </div>
    );
  }
);
