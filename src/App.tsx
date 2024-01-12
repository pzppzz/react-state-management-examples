import { TodoView as ReactContextTodoView } from "@/react-context";
import { TodoView as ReducerContextTodoView } from "@/reducer-context";
import { ViewWrapper } from "./ViewWrapper";
function App() {
	return (
		<ViewWrapper>
			<ReactContextTodoView title="ReactContext" />
			<ReducerContextTodoView title="ReactContext + useReducer" />
		</ViewWrapper>
	);
}

export default App;
