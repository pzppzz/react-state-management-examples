import { TodoItem } from "../TodoItem";
import { ITodo } from "@/types";
import { connect } from "@/reducer-context";

export type TodoListProps = {
	todoList: ITodo[];
};

const Index: React.FC<TodoListProps> = (props) => {
	console.log("TodoList re-rendered");
	return (
		<div>
			{props.todoList.map((todo, index) => {
				return <TodoItem key={todo.id} {...todo} order={index} />;
			})}
		</div>
	);
};

export const TodoList = connect<any, TodoListProps>(Index, (state) => ({
	todoList: state.todoList,
}));
