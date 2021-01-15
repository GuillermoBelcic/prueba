import * as moment from 'moment';

export class Expense {
	isValid(): boolean {
		const today: moment.Moment = moment();
		return (
			!!this.concept && 
			!!this.quantity &&
			!!(today.diff(this.date) >= 0)
			);
	}

	constructor(
		public concept: string,
		public quantity: number,
		public date: moment.Moment
	) {}

}