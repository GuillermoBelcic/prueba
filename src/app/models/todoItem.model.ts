import { IToDoItem } from './ToDoItem.Interface';

export class ToDoItem implements IToDoItem {

	constructor(
		public _id: string,
		public name: string,
		public description: string,
		public finished: boolean,
		public finishedAt: any
	) {}
}