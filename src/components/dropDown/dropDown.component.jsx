import React, { Component } from "react";
import { DateContainer, OptionsContainer } from "./dropDown.styles";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { connect } from "react-redux";
import {
  selectPieChartData,
  selectLineChart,
} from "../../redux/user/user.selector";
import { selectorPieChart } from "../../redux/general/general.selector";
import { createStructuredSelector } from "reselect";
import { selectPieChart } from "../../redux/general/general.actions";
import {
  getPieChartData,
  getLineChartData,
} from "../../firebase/firebase.utils";
const options = ["This Week", "This Month", "This Year "];

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      header: options[0],
      list: options.filter((word) => word !== options[0]),
      test: {},
    };
  }

  componentDidMount() {
    if (this.props.pieChartType) {
      this.setState({ test: this.props.pieData });
      this.props.loaded(0);
    }
  }

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  makeList = (option) => {
    const newList = options.filter((word) => word !== option);
    this.setState({ list: newList });
  };

  getData = (index) => {
    const { lineData, pieData, type, setLength, setData } = this.props;
    if (type === "Pie") {
      const result = getPieChartData(index, pieData);
      setData(result.name, result.stats);
      setLength(result.name.length);
    } else {
      const result = getLineChartData(index, lineData);
      setData(result.name, result.stats);
    }
  };

  render() {
    return (
      <div>
        <DateContainer onClick={this.toggleOpen} isOpen={this.state.isOpen}>
          <p style={{ fontSize: ".65rem", userSelect: "none" }}>
            {" "}
            {this.state.header}
          </p>
          {this.state.isOpen ? (
            <RiArrowDropUpLine style={{ fontSize: "1.5rem" }} />
          ) : (
            <RiArrowDropDownLine style={{ fontSize: "1.5rem" }} />
          )}
        </DateContainer>

        {this.state.isOpen ? (
          <OptionsContainer>
            {this.state.list.map((option) => {
              return (
                <span
                  key={option}
                  style={{
                    marginLeft: ".75rem",
                    marginBottom: ".5rem",
                    userSelect: "none",
                  }}
                  onClick={() => {
                    const { getData } = this;
                    if (option === "This Week") {
                      getData(0);
                    } else if (option === "This Month") {
                      getData(1);
                    } else {
                      getData(2);
                    }
                    this.toggleOpen();
                    this.makeList(option);
                    this.setState({ header: option });
                  }}
                >
                  {option}
                </span>
              );
            })}
          </OptionsContainer>
        ) : null}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loaded: (number) => dispatch(selectPieChart(number)),
});

const mapStateToProps = createStructuredSelector({
  pieData: selectPieChartData,
  lineData: selectLineChart,
  pieChartType: selectorPieChart,
});

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
