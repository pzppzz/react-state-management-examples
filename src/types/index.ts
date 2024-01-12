export type ITodo = {
	id: string;
	name: string;
	done: boolean;
};

export type IState = {
	todoList: ITodo[];
	checkAll: boolean;
	doneCount: number;
};
