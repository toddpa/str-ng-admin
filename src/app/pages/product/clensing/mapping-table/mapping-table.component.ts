import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mapping-table',
  templateUrl: './mapping-table.component.html',
  styleUrls: ['./mapping-table.component.scss']
})
export class MappingTableComponent implements OnInit {
  gridData = [
    {
      their: 'Starting',
      ours: 'Start date',
      theirFormat: ['mm/DDD/yy'],
      ourFormat: '/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/',
      conversion: ['common date formats']
    },
    {
      their: 'End',
      ours: 'End date',
      theirFormat: ['mm/DDD/yy'],
      ourFormat: '/^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/',
      conversion: ['common date formats']
    },
    {
      their: 'Amount',
      ours: 'Value',
      theirFormat: ['nnn,nnn.nn'],
      ourFormat: '/^$/',
      conversion: ['common number formats']
    }
  ];
  constructor() { }

  ngOnInit() {
  }
}
