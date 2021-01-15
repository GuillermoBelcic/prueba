import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { ApiService } from '../../services/api.service';

import { Expense } from './../../models/expense.model';

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.css'],
})
export class CreateExpenseComponent implements OnInit {
  private expense: Expense = new Expense('', 0, moment());

  public today: string = ''

  constructor(private $apiService: ApiService) {
	  this.today = (new Date()).toISOString();
  }

  ngOnInit(): void {}

  saveExpenses(expense: Expense) {
	this.$apiService.saveExpense(expense)
	.subscribe((data) => {
		console.log(data)
	});
  }

  onsubmit(f: NgForm) {
	const newExpense: Expense = new Expense(
		f.value.concept || '',
		f.value.quantity || 0,
		moment(f.value.date, '') || moment()
	);

	if(!newExpense.isValid()){
		return;
	} 

	this.saveExpenses(newExpense);
  }
}
