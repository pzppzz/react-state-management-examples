import { useState } from "react";
import { TodoListStore } from "./TodoListStore";
import { Footer, Header, TodoList } from "./components";
import { DEFAULT_LIST } from "@/constant";
export const TodoView: React.FC<{ title: string }> = (props) => {
  const [store] = useState(new TodoListStore(DEFAULT_LIST));
  return (
    <div>
      <h1>{props.title}</h1>
      <hr />
      <Header store={store} />
      <TodoList store={store} />
      <Footer store={store} />
    </div>
  );
};
