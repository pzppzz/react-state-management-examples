import { TodoListContext } from "@/react-context/TodoListContext";
import { useContext } from "react";

export const Footer: React.FC = () => {
	console.log("Footer re-rendered");
	const store = useContext(TodoListContext);
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
					disabled={!store.todoList.length}
				/>
				<span>已完成{store.doneCount + "/" + store.todoList.length}</span>
			</div>
			<div>
				<button onClick={store.deleteAllDone} disabled={!store.doneCount}>
					清除已完成
				</button>
			</div>
		</div>
	);
};
