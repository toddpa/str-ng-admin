import { Component, OnInit } from '@angular/core';
import { SRTDataService } from '../../../../service/SRTDataService';
import { InternalRpl } from '@toddpa/shared-module';

@Component({
  selector: 'srt-kendo-grid',
  templateUrl: './kendoGrid.component.html',
  styleUrls: ['./kendoGrid.component.scss']
})
export class KendoGridComponent implements OnInit {
  public gridData: InternalRpl[];

  constructor(private dataService: SRTDataService) { }

  ngOnInit() {
    this.getAllItems();
  }

  private getAllItems(): void {
    this.dataService
      .GetAll()
      .subscribe((data: any) => {
        if (data === undefined) {
          console.log('Data not loaded');
        } else {
          this.gridData = data;
          this.gridData.forEach(element => {
            console.log(element);
          });
        }
      },
      error => console.log(error),
      () => console.log('Get all Items complete'));
  }
}
