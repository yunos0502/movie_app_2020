import React, { Component } from "react";

export default class Detail extends Component {
  componentDidMount() {
    const { location, history } = this.props;

    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;

    if (location.state) {
      return (
        <span style={{ textAlign: "center", display: "block" }}>
          {location.state.title}
        </span>
      );
    } else {
      return null;
    }
  }
}
