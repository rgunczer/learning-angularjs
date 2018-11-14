import { Component, AfterViewInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'd3App';

  ngAfterViewInit() {
    // d3.select('#someDiv').style('border', '5px darkgray dashed');
    // d3.select('#someDiv').attr('id', 'newID');
    // d3.select('#someCheckbox').property('checked', true);

    const svg = d3.select('svg');
    const width = svg.attr('width');
    const height = svg.attr('height');
    const radius = Math.min(width, height) / 2;

    console.log(`${width}, ${height}, ${radius}`);

    const g = svg.append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    const color = d3.scaleOrdinal([
      'gray', 'green', 'brown', 'orange', 'yellow', 'red', 'purple'
    ]);

    const pie = d3.pie().value((d: any) => {
      return d.percent;
    });

    const path = d3.arc()
      .outerRadius(radius - 10).innerRadius(0);

    const label = d3.arc()
      .outerRadius(radius).innerRadius(radius - 80);

    const data = [
      {
        states: 'UP',
        percent: 10.00
      },
      {
        states: 'Maharastra',
        percent: 70.00
      },
      {
        states: 'Bihar',
        percent: 70.0
      },
      {
        states: 'MP',
        percent: 120.00
      },
      {
        states: 'Gujarat',
        percent: 50.0
      },
      {
        states: 'WB',
        percent: 49.0
      },
      {
        states: 'TiNTiN',
        percent: 30.0
      }
    ];

    // d3.csv('assets/populations.csv', (error, data) => {

    //   if (error) {
    //      throw error;
    //   }

    // array.forEach( data => {
      console.log(count, data);

      const arc = g.selectAll('.arc')
         .data(pie(data))
         .enter()
         .append('g')
         .attr('class', 'arc');

      arc.append('path')
         .attr('d', path)
         .attr('fill', (d) => {
           return color(d.data.states);
          });

      // console.log(arc);

      arc.append('text').attr('transform', (d) => {
         return 'translate(' + label.centroid(d) + ')';
      })

      .text((d) => {
        return d.data.states;
      });
  //});

   svg.append('g')
    .attr('transform', 'translate(' + (width / 2 - 120) + ',' + 20 + ')')
    .append('text').text('Top population states in india')
    .attr('class', 'title');

  }

  // removeCircle() {
  //   console.log('remove circle...');
  //   d3.select('circle').remove();
  // }

  // changeRectColor() {
  //   d3.select('rect').style('fill', 'purple');
  // }

  // setBackColor() {
  //   d3.select('svg').style('background', 'darkgray');
  // }

}
