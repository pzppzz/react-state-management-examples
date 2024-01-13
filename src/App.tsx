import { TodoView as ReactContextTodoView } from "@/react-context";
import { TodoView as ReducerContextTodoView } from "@/reducer-context";
import { TodoView as MobxTodoView } from "@/mobx";
import { ViewWrapper } from "./ViewWrapper";
function App() {
  return (
    <ViewWrapper>
      <ReactContextTodoView title="ReactContext" />
      <ReducerContextTodoView title="ReactContext + useReducer" />
      <MobxTodoView title="Mobx" />
    </ViewWrapper>
  );
}

export default App;
