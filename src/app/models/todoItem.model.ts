import { IToDoItem } from './IToDoItem.Interface';

export class ToDoItem implements IToDoItem {

	constructor(
		public _id: string,
		public name: string,
		public description: string,
		public finished: boolean,
		public finishedAt: any
	) {}

	static fromRemote(remote: IToDoItem) {
		return new ToDoItem(
			remote._id,
			remote.name,
			remote.description,
			remote.finished,
			remote.finishedAt
		);
	};

	toRemote() {
		return {
			description: this.description,
			finished: this.finished,
			finishedAt: this.finishedAt,
			name: this.name
		};
	}
}