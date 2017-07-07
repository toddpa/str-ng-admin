import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'factor-table',
  templateUrl: './factor-table.component.html',
  styleUrls: ['./factor-table.component.scss']
})
export class FactorTableComponent implements OnInit {
  gridData = [
    {
      property: 'number',
      value: '23'
    },
    {
      property: 'status',
      value: 'true'
    },
    {
      property: 'big number',
      value: '23,000,000,000'
    },
    {
      property: 'date',
      value: '11/01/1989'
    },
    {
      property: 'small number',
      value: '0.00000123'
    },
    {
      property: 'input',
      value: '123.123456'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
