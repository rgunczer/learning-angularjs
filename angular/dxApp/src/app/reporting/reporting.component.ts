import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DxDataGridComponent } from 'devextreme-angular';

import { FileInfo } from '../file-info';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit, AfterViewInit {

  fileAll = '';
  fileConv = '';

  locAll = '';
  locConv = '';

  oldFileCount = 0;
  convFileCount = 0;

  allLOC = 0;
  convLOC = 0;

  files: FileInfo[];

  @ViewChild('grdFiles') gridFiles: DxDataGridComponent;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('getdata')
    .subscribe((data: FileInfo[]) => {
      console.log(data);
      this.files = data;

      this.update();

    });
  }

  private update() {
    this.oldFileCount = 0;
    this.convFileCount = 0;

    this.allLOC = 0;
    this.convLOC = 0;

    this.files.forEach( (item: FileInfo) => {
      ++this.oldFileCount;
      this.allLOC += item.LineCount;

      if (item.Converted) {
        ++this.convFileCount;
        this.convLOC += item.LineCount;
      }
    });

    this.fileAll = this.oldFileCount + ' files';
    this.fileConv = this.convFileCount + ' converted';

    this.locAll = this.allLOC + ' lines of code';
    this.locConv = this.convLOC + ' converted';

    console.log(`${this.oldFileCount}, ${this.convFileCount}`);
  }

  ngAfterViewInit() {
    this.gridFiles.height = '800px';
    this.gridFiles.scrolling.mode = 'virtual';
    this.gridFiles.editing.allowUpdating = true;
    this.gridFiles.paging.enabled = false;
    this.gridFiles.hoverStateEnabled = true;
    this.gridFiles.selection = { mode: 'none' };
    this.gridFiles.filterRow = {
      visible: true
    };
    this.gridFiles.columns = [
      {
        dataField: 'Converted',
        caption: 'CONVERTED',
        width: '12%',
        allowEditing: true
      },
      {
        dataField: 'LineCount',
        caption: 'LOC',
        width: '8%',
        allowEditing: false
      },
      {
        dataField: 'Path',
        caption: 'PATH',
        width: '80%',
        allowEditing: false
      }
    ];

    this.gridFiles.onRowUpdated.subscribe( (event: any) => {
      console.log('onRowUpdated', event);

      // event.key.LineCount
      // event.key.Path
      // event.key.Converted

      const data = {
        path: event.key.Path,
        converted: event.key.Converted
      };

      this.http.post('updateconverted', data)
      .subscribe((responseData: any) => {
        console.log('afer-update', responseData);

        this.files = responseData;

        this.update();

      });

    });
  }

}
