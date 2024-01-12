import { TodoListProvider } from "./TodoListContext";
import { Footer, Header, TodoList } from "./components";
import { DEFAULT_LIST } from "@/constant";

export const TodoView: React.FC<{ title: string }> = (props) => {
	return (
		<TodoListProvider initTodoList={DEFAULT_LIST}>
			<div>
				<h1>{props.title}</h1>
				<hr />
				<Header />
				<TodoList />
				<Footer />
			</div>
		</TodoListProvider>
	);
};
