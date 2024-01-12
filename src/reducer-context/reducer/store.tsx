import { IState } from "@/types";
import {
	Dispatch,
	PropsWithChildren,
	createContext,
	memo,
	useContext,
	useReducer,
} from "react";
import { TodoListAction, todoListReducer } from "./todoListReducer";

export type TodoListStore = {
	state: IState;
	dispatch: Dispatch<TodoListAction<any>>;
};

export type TodoListProviderProps = {
	initTodoList?: IState["todoList"];
};

export type PropsWithDispatch<T = any> = T & {
	dispatch: Dispatch<TodoListAction<any>>;
};

export type MapStateToProps<T> = (state: IState) => T;

const TodoListContext = createContext<TodoListStore>({} as any);

const createInitState = (initTodoList: IState["todoList"]) => {
	return {
		todoList: initTodoList,
		checkAll: initTodoList.every((todo) => todo.done),
		doneCount: initTodoList.filter((todo) => todo.done).length,
	};
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTodoListStore = () => {
	return useContext(TodoListContext);
};

export const TodoListProvider: React.FC<
	PropsWithChildren<TodoListProviderProps>
> = (props) => {
	const { initTodoList = [] } = props;
	const [state, dispatch] = useReducer(
		todoListReducer,
		initTodoList,
		createInitState
	);
	return (
		<TodoListContext.Provider value={{ state, dispatch }}>
			{props.children}
		</TodoListContext.Provider>
	);
};

// 提供一个高阶函数 将store的状态映射到组件props 并提供浅比较 减少组件重新渲染次数
// eslint-disable-next-line react-refresh/only-export-components
export function connect<
	T extends { dispatch: Dispatch<TodoListAction<any>> } = any,
	P = any
>(Componenet: React.FC<T & P>, mapStateToProps?: MapStateToProps<P>) {
	const MemoedComp = memo(Componenet);
	const mapState = mapStateToProps
		? mapStateToProps
		: ((() => ({})) as unknown as MapStateToProps<P>);
	return function ConnectedComponent(props: T) {
		const store = useTodoListStore();
		const mappedState = mapState(store.state);
		return <MemoedComp {...props} {...mappedState} dispatch={store.dispatch} />;
	};
}
