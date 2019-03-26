import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Bar, Line, Pie, Scatter, Area } from "react-chartjs-2";
import axios from 'axios';

class Chart extends Component {
  constructor(props) {
    super(props);
    let url =
      "http://api-gateway-dbs-techtrek.ap-southeast-1.elasticbeanstalk.com/customers/limzeyang";

    this.state = {
      data: {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [
          {
            label: "Spendings",
            backgroundColor: "rgba(255,0,255,0.75)",
            data: [4, 5, 1, 10, 32, 2, 12]
          },
          {
            label: "Savings",
            backgroundColor: "rgba(0,255,0,0.75)",
            data: [14, 15, 21, 0, 12, 4, 2]
          }
        ]
      }
    };
  }

  render() {
    return (
      <Container>
        <div style={{ position: "relative", width: 600, height: 550 }}>
          <h3>Chart Samples</h3>
          <Line options={{ responsive: true }} data={this.state.data} />
        </div>
      </Container>
    );
  }
}

export default Chart;
