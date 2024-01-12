import { PropsWithDispatch, connect } from "@/reducer-context";
import { ITodo } from "@/types";

export type TodoItemProps = ITodo & {
	order: number;
};
const Index: React.FC<PropsWithDispatch<TodoItemProps>> = (props) => {
	console.log(`TodoItem ${props.name} re-rendered`);
	const handleChange = () => {
		props.dispatch({ type: "TOGGLE_TODO", payload: props.id });
	};
	const handleDelete = () => {
		props.dispatch({ type: "DELETE_TODO", payload: props.id });
	};
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
					<input type="checkbox" checked={props.done} onChange={handleChange} />
					<span style={{ fontSize: 14, marginLeft: 6 }}>
						{props.done ? "已完成" : "未完成"}
					</span>
				</label>
			</div>
			<div>
				<button style={{ marginLeft: 6 }} onClick={handleDelete}>
					删除
				</button>
			</div>
		</div>
	);
};

export const TodoItem = connect(Index);
