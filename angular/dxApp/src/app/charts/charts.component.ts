import { Component, OnInit, ViewChild, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { DxPieChartComponent } from 'devextreme-angular';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() title = '';
  @Input() all = 0;
  @Input() conv = 0;
  @Input() labelAll = '';
  @Input() labelConv = '';
  @Input() palette = 'Soft Blue';

  conversionOne: any[];

  @ViewChild(DxPieChartComponent) pieChartOne: DxPieChartComponent;

  constructor() { }

  ngOnInit() {

    this.conversionOne = [
      { name: 'a', value: 0.99 },
      { name: 'b', value: 0.01 }
    ];

  }

  ngAfterViewInit() {
    this.pieChartOne.title = this.title;

    this.pieChartOne.animation = {
      easing: 'linear',
      duration: 1000
    };

    this.pieChartOne.commonSeriesSettings = {
      argumentFieldName: 'name'
    };

    this.pieChartOne.series = {
      argumentField: 'name',
      argumentType: 'numerice',
      valueField: 'value',
      label: {
        visible: true,
        format: 'percent'
      },
      hoverMode: 'none'
    };

    this.pieChartOne.palette = this.palette; //'Soft Pastel'; // ['gray', 'blue'];
  }

  ngOnChanges(changes: SimpleChanges): void {

    let conv = this.conv;

    if (changes.convFileCount) {
      conv = changes.convFileCount.currentValue;
    }

    let all = this.all;

    if (changes.oldFileCount) {
      all = changes.oldFileCount.currentValue;
    }

    const perc = conv / all;

    const allPerc = 1 - perc;
    const convPerc = perc;

    console.log(`${all}, ${conv}`);

    const a = this.labelAll;
    const b = this.labelConv;

    console.log(`a: ${a}, b: ${b}`);

    this.conversionOne = [
      { name: a, value: allPerc },
        { name: b, value: convPerc }
    ];

  }
}
