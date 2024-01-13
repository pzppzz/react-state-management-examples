import { ITodo } from "@/types";
import { uid } from "@/utils";
import { computed, makeAutoObservable, observable } from "mobx";

export class TodoListStore {
  todoList: ITodo[];

  constructor(initTodoList?: ITodo[]) {
    this.todoList = initTodoList || [];
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.checkAllTodo = this.checkAllTodo.bind(this);
    this.deleteAllDone = this.deleteAllDone.bind(this);
    makeAutoObservable(this);
    // makeAutoObservable(this, {
    //   todoList: observable,
    //   total: computed,
    //   checkAll: computed,
    //   doneCount: computed,
    // });
  }

  addTodo(todoName: string) {
    if (this.todoList.findIndex((todo) => todo.name === todoName) === -1) {
      return;
    }
    const todo: ITodo = {
      id: uid(),
      name: todoName,
      done: false,
    };
    this.todoList.push(todo);
  }

  deleteTodo(id: string) {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
  }

  toggleTodo(id: string) {
    const todo = this.todoList.find((todo) => todo.id === id);
    if (todo) {
      todo.done = !todo.done;
    }
  }

  deleteAllDone() {
    this.todoList = this.todoList.filter((todo) => !todo.done);
  }

  checkAllTodo() {
    const allDone = this.checkAll;
    this.todoList.forEach((todo) => {
      todo.done = !allDone;
    });
  }

  get checkAll() {
    return this.todoList.every((todo) => todo.done);
  }

  get doneCount() {
    return this.todoList.filter((todo) => todo.done).length;
  }

  get total() {
    return this.todoList.length;
  }
}
