import { TodoListState } from "@/react-context/TodoListContext";
import { ITodo } from "@/types";

export type TodoItemProps = Pick<TodoListState, "toggleTodo" | "deleteTodo"> &
	ITodo & {
		order: number;
	};

export const TodoItem: React.FC<TodoItemProps> = (props) => {
	console.log(`TodoItem ${props.name} re-rendered`);
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
					textDecoration: props.done ? "line-through" : "none",
				}}
			>
				{props.name}
			</div>
			<div>
				<label htmlFor="">
					<input
						type="checkbox"
						checked={props.done}
						onChange={() => props.toggleTodo(props.id)}
					/>
					<span style={{ fontSize: 14, marginLeft: 6 }}>
						{props.done ? "已完成" : "未完成"}
					</span>
				</label>
			</div>
			<div>
				<button
					style={{ marginLeft: 6 }}
					onClick={() => props.deleteTodo(props.id)}
				>
					删除
				</button>
			</div>
		</div>
	);
};
