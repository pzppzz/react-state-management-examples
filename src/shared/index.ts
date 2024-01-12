import { IState, ITodo } from "@/types";
import { uid } from "@/utils";

export const handleAddTodo = (state: IState, todoName: string) => {
	if (state.todoList.some((todo) => todo.name === todoName)) {
		return state;
	}
	const newTodo = {
		id: uid(),
		name: todoName,
		done: false,
	};
	return { ...state, todoList: [...state.todoList, newTodo] };
};

export const handleDeleteTodo = (state: IState, todoId: string) => {
	let deletedTodo: ITodo | undefined;
	const newTodoList = state.todoList.filter((todo) => {
		if (todo.id === todoId) {
			deletedTodo = todo;
		}
		return todo.id !== todoId;
	});
	const doneCount = state.doneCount - (deletedTodo?.done ? 1 : 0);
	return {
		...state,
		doneCount,
		todoList: newTodoList,
		checkAll: doneCount === newTodoList.length,
	};
};

export const handleToggleTodo = (state: IState, todoId: string) => {
	let doneCount = 0;
	const newTodoList = state.todoList.map((todo) => {
		const newTodo = todo.id === todoId ? { ...todo, done: !todo.done } : todo;
		if (newTodo.done) {
			doneCount++;
		}
		return newTodo;
	});
	return {
		...state,
		doneCount,
		todoList: newTodoList,
		checkAll: doneCount === state.todoList.length,
	};
};

export const handleCheckAll = (state: IState) => {
	const checkAll = state.checkAll;
	return {
		...state,
		checkAll: !checkAll,
		doneCount: checkAll ? 0 : state.todoList.length,
		todoList: state.todoList.map((todo) => ({ ...todo, done: !checkAll })),
	};
};

export const handleDeleteAllDone = (state: IState) => {
	return {
		...state,
		doneCount: 0,
		checkAll: false,
		todoList: state.todoList.filter((todo) => !todo.done),
	};
};

export const createInitState = (initTodoList: ITodo[]) => {
	return {
		todoList: initTodoList,
		checkAll: initTodoList.every((todo) => todo.done),
		doneCount: initTodoList.filter((todo) => todo.done).length,
	};
};
