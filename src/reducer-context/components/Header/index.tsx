import { connect } from "@/reducer-context";
import { useState, Dispatch } from "react";

const Index: React.FC<{ dispatch: Dispatch<any> }> = (props) => {
	console.log("Header re-rendered");
	const { dispatch } = props;
	const [todoName, setTodoName] = useState("");
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTodoName(e.target.value);
	};
	const handleAdd = () => {
		if (todoName.trim() !== "") {
			dispatch({ type: "ADD_TODO", payload: todoName });
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
export const Header = connect(Index);
