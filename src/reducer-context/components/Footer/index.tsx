import { PropsWithDispatch, connect } from "@/reducer-context";
type FooterProps = {
	total: number;
	doneCount: number;
	checkAll: boolean;
};
const Index: React.FC<PropsWithDispatch<FooterProps>> = (props) => {
	console.log("Footer re-rendered");
	const handleChange = () => {
		props.dispatch({ type: "CHECK_ALL" });
	};
	const handleDeleteAllDone = () => {
		props.dispatch({ type: "DELETE_ALL_DONE" });
	};
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
					checked={props.checkAll}
					onChange={handleChange}
					disabled={!props.total}
				/>
				<span>已完成{props.doneCount + "/" + props.total}</span>
			</div>
			<div>
				<button onClick={handleDeleteAllDone} disabled={!props.doneCount}>
					清除已完成
				</button>
			</div>
		</div>
	);
};

export const Footer = connect<PropsWithDispatch, FooterProps>(
	Index,
	(state) => ({
		doneCount: state.doneCount,
		checkAll: state.checkAll,
		total: state.todoList.length,
	})
);
