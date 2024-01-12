import { useContext, useState } from "react";
import { TodoListContext } from "@/react-context/TodoListContext";

export const Header: React.FC = () => {
	console.log("Header re-rendered");
	const store = useContext(TodoListContext);
	const [todoName, setTodoName] = useState("");
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTodoName(e.target.value);
	};
	const handleAdd = () => {
		if (todoName.trim() !== "") {
			store.addTodo(todoName);
		}
		setTodoName("");
	};
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
			}}
		>
			<input
				type="text"
				placeholder="请输入代办事项..."
				value={todoName}
				onChange={handleChange}
				style={{ flex: 1 }}
			/>
			<button onClick={handleAdd} style={{ marginLeft: 4 }}>
				添加
			</button>
		</div>
	);
};
