import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { }
  public chartOption: any = {};
  public selectedChart = 'lineChart';
  public themes = [{label:'Default Theme',value:''},{label:'Dark Theme',value: 'darkTheme'},{label:'Light Theme',value:'lightTheme'}];
  public selectedTheme = '';
  

  public chartsOptions:any ={lineChart:{
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      type: 'value'
    },
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
      formatter: function (params: any) {
        return `<b>${params['name']}</b> : $ ${params['value']}`;
      }
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1430, 1550, 1200, 1650.1450, 1680, 1890, 2300],
      type: 'line',
      areaStyle: {}
    }]
  },
barChart:{
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [{
        value: 120,
        itemStyle: {color: 'grey'},
    },
    {
        value: 200,
        itemStyle: {color: 'red'},
    },
    {
        value: 150,
        itemStyle: {color: 'blueviolet'},
    },
    {
      value: 80,
      itemStyle: {color: 'green'},
  },
  {
      value: 70,
      itemStyle: {color: 'blue'},
  },
  {
      value: 110,
      itemStyle: {color: 'yellow'},
  },
  {
    value: 130,
    itemStyle: {color: 'skyblue'},
}],
      // [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
},
pieChart:{
  title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
},
candleChart: {
  xAxis: {
    data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
  },
  yAxis: {},
  series: [
    {
      type: 'candlestick',
      data: [
        [20, 34, 10, 38],
        [40, 35, 30, 50],
        [31, 38, 33, 44],
        [38, 15, 5, 42]
      ]
    }
  ]
}}
  public chartTypes = [{ label: 'Line Chart', value:'lineChart' },
  { label: 'Bar Chart', value:'barChart' },
  { label: 'Pie Chart', value:'pieChart' },
  { label: 'Candlestick', value:'candleChart' }]


  ngOnInit(): void {
  }

}
