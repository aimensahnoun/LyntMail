import React, { Component } from "react";

import DropDown from "../dropDown/dropDown.component";

import {
  LineContainer,
  MainContainer,
  TitleContainer,
} from "./lineChart.styles";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectLineChart } from "../../redux/user/user.selector";

import { Line } from "react-chartjs-2";

import { dashboardPanelChart } from "../../variables/charts";
import { getLineChartData } from "../../firebase/firebase.utils";

class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = { componentData: {} };
  }

  setData = (labels, dataset) => {
    var data = (canvas) => {
      var ctx = canvas.getContext("2d");
      var chartColor = "#E86F52";
      var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
      gradientStroke.addColorStop(0, "#80b6f4");
      gradientStroke.addColorStop(1, chartColor);
      var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
      gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
      gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");
      return {
        labels: labels,
        datasets: [
          {
            label: "Active Users",
            borderColor: "#f96332",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "#f96332",
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            data: dataset,
          },
        ],
      };
    };
    this.setState({
      componentData: data,
    });
  };

  async componentDidMount() {
    const { lineChart } = this.props;
    const result = getLineChartData(0, lineChart);
    this.setData(result.name, result.stats);
  }

  render() {
    const { setData } = this;
    const { componentData } = this.state;
    return (
      <MainContainer>
        <TitleContainer>
          <h6>Subscribers</h6>

          <DropDown setData={setData} type="Line" />
        </TitleContainer>
        <LineContainer>
          <Line data={componentData} options={dashboardPanelChart.options} />
        </LineContainer>
      </MainContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  lineChart: selectLineChart,
});

export default connect(mapStateToProps)(LineChart);

//selectLineChart

// {
//   labels: labels,
//   datasets: [
//     {
//       data: dataset,
//       label: "Subs",
//       borderColor: "#E86F52",
//       pointBorderColor: "#E86F52",
//       pointBackgroundColor: "#E86F52",
//       pointHoverBackgroundColor: "#E86F52",
//       pointHoverBorderColor: "#E86F52",
//       pointBorderWidth: 1,
//       pointHoverRadius: 7,
//       pointHoverBorderWidth: 2,
//       pointRadius: 5,
//       fill: false,
//       borderWidth: 2,
//     },
//   ],
// },
