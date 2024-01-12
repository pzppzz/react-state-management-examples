import {
	handleAddTodo,
	handleCheckAll,
	handleDeleteAllDone,
	handleDeleteTodo,
	handleToggleTodo,
} from "@/shared";
import { IState } from "@/types";

export type TodoListAction<T = any> = {
	type: string;
	payload?: T;
};

export function todoListReducer(state: IState, action: TodoListAction): IState {
	switch (action.type) {
		case "ADD_TODO":
			return handleAddTodo(state, action.payload);
		case "DELETE_TODO":
			return handleDeleteTodo(state, action.payload);
		case "TOGGLE_TODO":
			return handleToggleTodo(state, action.payload);
		case "CHECK_ALL":
			return handleCheckAll(state);
		case "DELETE_ALL_DONE":
			return handleDeleteAllDone(state);
		default:
			return state;
	}
}
