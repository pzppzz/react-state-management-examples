import React, { PropsWithChildren, createContext, useState } from "react";
import {
	createInitState,
	handleAddTodo,
	handleCheckAll,
	handleDeleteAllDone,
	handleDeleteTodo,
	handleToggleTodo,
} from "@/shared";
import { IState, ITodo } from "@/types";

export type TodoListState = IState & {
	addTodo: (todoName: string) => void;
	deleteTodo: (id: string) => void;
	toggleTodo: (id: string) => void;
	checkAllTodo: () => void;
	deleteAllDone: () => void;
};

export type TodoListProviderProps = {
	initTodoList?: ITodo[];
};

export const TodoListContext = createContext<TodoListState>(
	{} as TodoListState
);

export const TodoListProvider: React.FC<
	PropsWithChildren<TodoListProviderProps>
> = (props) => {
	const [state, setState] = useState<IState>(() =>
		createInitState(props.initTodoList || [])
	);
	const todoListState: TodoListState = {
		...state,
		addTodo: (todoName) => {
			setState(handleAddTodo(state, todoName));
		},
		deleteTodo: (id) => {
			setState(handleDeleteTodo(state, id));
		},
		toggleTodo: (id) => {
			setState(handleToggleTodo(state, id));
		},
		checkAllTodo() {
			setState(handleCheckAll(state));
		},
		deleteAllDone() {
			setState(handleDeleteAllDone(state));
		},
	};
	return (
		<TodoListContext.Provider value={todoListState}>
			{props.children}
		</TodoListContext.Provider>
	);
};
