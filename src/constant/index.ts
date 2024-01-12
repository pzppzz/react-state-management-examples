import { ITodo } from "@/types";
import { uid } from "@/utils";

export const DEFAULT_LIST: ITodo[] = [
	{
		id: uid(),
		name: "吃饭",
		done: false,
	},
	{
		id: uid(),
		name: "睡觉",
		done: false,
	},
	{
		id: uid(),
		name: "逛街",
		done: false,
	},
];
