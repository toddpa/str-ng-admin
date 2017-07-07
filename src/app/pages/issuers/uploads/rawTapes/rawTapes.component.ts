import { Component, OnInit } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';

@Component({
  selector: 'raw-tapes',
  templateUrl: './rawTapes.component.html',
  styleUrls: ['./rawTapes.component.scss']
})
export class RawTapesComponent implements OnInit {
  public fileUploaderOptions: NgUploaderOptions = {
    url: ''
  };
  public gridData = [
    {
      filename: 'loans3.csv',
      source: 'SME Bank',
      uploaded: '26/07/2017 12:30:00',
      status: 'RETURNED'
    },
    {
      filename: 'loans2.xls',
      source: 'SME Bank',
      uploaded: '27/07/2017 12:30:00',
      status: 'CORRUPT'
    },
    {
      filename: 'loans3.xls',
      source: 'SME Bank',
      uploaded: '28/07/2017 12:30:00',
      status: 'IMPORTED'
    },
  ];

  constructor() { }

  ngOnInit() {
  }
}
