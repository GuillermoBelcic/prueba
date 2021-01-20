import { IToDoItem } from './IToDoItem.Interface';

export interface IRemoteTodoList {
	success: boolean;
	numItems: number;
	docs: IToDoItem[];
}