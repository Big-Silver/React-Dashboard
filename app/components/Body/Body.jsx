import styles from './_Body.scss';
import React from 'react';
import Menu from '../Menu/Menu';

let { PropTypes } = React;

export default class Body extends React.Component {

  static defaultProps = {
    items: []
  };

  static propTypes = {
    items: PropTypes.array.isRequired
  };

  static countryDataSource = {
    chart: {
      // caption options
      caption: "Top Revenue Earning Countries",
      xAxisName: "Country",
      yAxisName: "Revenue (In USD)",
      theme: "carbon"
    },

    data: [{
      label: "United States",
      value: "920000"
    }, {
      label: "China",
      value: "730000"
    }, {
      label: "Germany",
      value: "680000"
    }, {
      label: "United Kingdom",
      value: "670000"
    }, {
      label: "Australia",
      value: "639000"
    }, {
      label: "Canada",
      value: "590000"
    }]
  };

  static countryChartConfigs = {
    type: "column2d",
    renderAt: "country-revenue",
    width: '100%',
    height: 400,
    dataFormat: "json",
    dataSource: this.countryDataSource
  };

  static monthlyDataSource = {
    chart: {
      // caption options
      "caption": "Monthly Revenue Trend",
      "xAxisName": "Month",
      "yAxisName": "Revenue (In USD)",
      "theme": "carbon"
    },
    data: [{
      "label": "Jan",
      "value": "657000"
    }, {
      "label": "Feb",
      "value": "138000"
    }, {
      "label": "Mar",
      "value": "192000"
    }, {
      "label": "Apr",
      "value": "111000"
    }, {
      "label": "May",
      "value": "438000"
    }, {
      "label": "Jun",
      "value": "292000"
    }, {
      "label": "Jul",
      "value": "365000"
    }, {
      "label": "Aug",
      "value": "649000"
    }, {
      "label": "Sep",
      "value": "746000"
    }, {
      "label": "Oct",
      "value": "803000"
    }, {
      "label": "Nov",
      "value": "876000"
    }, {
      "label": "Dec",
      "value": "730000"
    }]
  };

  static monthlyChartConfigs = {
    type: "spline",
    renderAt: "monthly-revenue",
    width: '100%',
    height: 350,
    dataFormat: "json",
    dataSource: this.monthlyDataSource
  };

  static productDataSource = {
    chart: {
      // caption options
      "caption": "Split of Revnue by Products",
      "theme": "carbon"
    },
    data: [{
      "label": "Product 1",
      "value": "1460000"
    }, {
      "label": "Product 2",
      "value": "2190000"
    }, {
      "label": "Product 3",
      "value": "1095000"
    }, {
      "label": "Product 4",
      "value": "1095000"
    }, {
      "label": "Product 5",
      "value": "1460000"
    }]
  };

  static productChartConfigs = {
    type: "doughnut2d",
    renderAt: "product-revenue",
    width: '100%',
    height: 350,
    dataFormat: "json",
    dataSource: this.productDataSource
  };
  render() {
    return (
      <div>
        <h1 className="main-title">Acme Inc. Revenue Analysis for 2015</h1>
        <div id="interactive-dashbaord"></div>
        <div className="chart-row">
          <div id="country-revenue">
            <react_fc.FusionCharts {...countryChartConfigs} />
          </div>
        </div>
        <div className="chart-row">
          <div id="monthly-revenue" className="inline-chart">
            <react_fc.FusionCharts {...monthlyChartConfigs} />
          </div>
          <div id="product-revenue" className="inline-chart">
            <react_fc.FusionCharts {...productChartConfigs} />
          </div>
        </div>
      </div>
    );
  }
}
