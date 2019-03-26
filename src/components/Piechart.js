import React, { Component } from "react";
import { Bar, Line, Pie, Scatter, Area, Mixed } from "react-chartjs-2";
import { Container } from "react-bootstrap";
import axios from "axios";
import transactionData from './transactionData';

class Piechart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Travel", "Retail", "Food", "Misc", "Income"],
        datasets: [
          {
            label: "Expenditure",
            data: [180, 10, 110, 15, 20],
            backgroundColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(255, 205, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(153, 102, 255, 1",
              "rgba(255, 203, 207, 1)"
            ]
          }
        ]
      },
      data: []
    };
  }

  renderPieChart = () => {
    let response = transactionData;
    let listOfTopics = {};
    let total = 0;

    response.forEach(x => {
      if (Object.keys(listOfTopics).indexOf(x.tag) >  -1) {
        listOfTopics[x.tag] += parseInt(x.amount);
        total += parseInt(x.amount);
        console.log(listOfTopics[x.tag]);
      } else if (x.type == "DEBIT") {
        listOfTopics[x.tag] = parseInt(x.amount);
        total += x.amount;
      }
    });
    return {
      labels: Object.keys(listOfTopics),
      datasets: [
        {
          label: "Expenditure",
          data: Object.values(listOfTopics),
          backgroundColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 205, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(153, 102, 255, 1",
            "rgba(255, 203, 207, 1)"
          ]
        }
      ]
    };
  };

  render() {
    return (
      <Container>
        <div className="chart">
          <Pie
            data={this.renderPieChart() == null ? this.state.chartData : this.renderPieChart()}
            options={{
              title: {
                display: true,
                text: "Expenditure"
              }
            }}
          />
        </div>
        {this.state.data.map(item => (
          <div>
            <h1>{item.id}</h1>
            <h1>{item.title}</h1>
            <h1>{item.value}</h1>
          </div>
        ))}
      </Container>
    );
  }
}

export default Piechart;
