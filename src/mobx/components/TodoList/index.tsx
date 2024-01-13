import { observer } from "mobx-react-lite";
import { TodoItem } from "../TodoItem";
import type { TodoListStore } from "@/mobx/TodoListStore";

export const TodoList: React.FC<{ store: TodoListStore }> = observer(
  ({ store }) => {
    console.log("TodoList re-rendered");
    return (
      <div>
        {store.todoList.map((todo, index) => {
          return (
            <TodoItem
              key={todo.id}
              order={index}
              todo={todo}
              deleteTodo={store.deleteTodo}
              toggleTodo={store.toggleTodo}
            />
          );
        })}
      </div>
    );
  }
);
