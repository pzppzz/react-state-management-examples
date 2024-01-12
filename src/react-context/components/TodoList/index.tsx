import { useContext } from "react";
import { TodoItem } from "../TodoItem";
import { TodoListContext } from "@/react-context/TodoListContext";

export const TodoList: React.FC = () => {
	console.log("TodoList re-rendered");
	const store = useContext(TodoListContext);
	return (
		<div>
			{store.todoList.map((todo, index) => {
				return (
					<TodoItem
						key={todo.id}
						{...todo}
						order={index}
						deleteTodo={store.deleteTodo}
						toggleTodo={store.toggleTodo}
					/>
				);
			})}
		</div>
	);
};
