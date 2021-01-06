import React, { Component } from "react";

import {
  MainContainer,
  TitleContainer,
  ChartContainer,
} from "./doughnutChart.styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectPieChartData } from "../../redux/user/user.selector";
import { selectorPieChart } from "../../redux/general/general.selector";
import DropDown from "../dropDown/dropDown.component";
import { Doughnut } from "react-chartjs-2";
import { selectPieChart } from "../../redux/general/general.actions";
import { getPieChartData } from "../../firebase/firebase.utils";

class DoughnutChart extends Component {
  constructor(props) {
    super(props);
    this.state = { componentData: {}, length: 0,};
  }

  setData = (labels, dataset) => {
    this.setState({
      componentData: {
        labels: labels,
        datasets: [
          {
            data: dataset,
            backgroundColor: [
              "#E86F52",
              "#36A2EB",
              "#FFCE56",
              "#d08128",
              "#0e4999",
              "#ec0857",
              "#39f6b5",
              "#98ab85",
              "#9b393d",
              "#e3ac66",
              "#f8d44e",
            ],
            hoverBackgroundColor: [
              "#E86F52",
              "#36A2EB",
              "#FFCE56",
              "#d08128",
              "#0e4999",
              "#ec0857",
              "#39f6b5",
              "#98ab85",
              "#9b393d",
              "#e3ac66",
              "#f8d44e",
            ],
          },
        ],
      },
    });
  };
  setLength = (length) => {
    this.setState({ length: length });
  };

  componentDidMount() {
    const { pieChart } = this.props;
    const result = getPieChartData(0, pieChart);
    this.setData(result.name, result.stats);
    this.setLength(result.name.length);
  }

  render() {
    const { componentData, length } = this.state;

    const { setData, setLength } = this;

    return (
      <MainContainer>
        <TitleContainer>
          <h6>Subscribers by Category</h6>
          <DropDown setData={setData} setLength={setLength} type="Pie" />
        </TitleContainer>
        <ChartContainer>
          {length === 0 ? (
            <div
              style={{
                display: "flex",
                height: "75%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h5 style={{ color: "#E86F52" }}>
                Not enough data to show graph
              </h5>
            </div>
          ) : (
            <Doughnut data={componentData} />
          )}
        </ChartContainer>
      </MainContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  pieChart: selectPieChartData,
  pieChartType: selectorPieChart,
});

const mapDispatchToProps = (dispatch) => ({
  selectPieChart: (number) => dispatch(selectPieChart(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DoughnutChart);
