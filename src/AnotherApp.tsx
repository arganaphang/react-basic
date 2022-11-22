import React from "react";

type AnotherAppState = {
  count: number;
};

export default class AnotherApp extends React.Component<{}, AnotherAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleCounter(value: number) {
    this.setState((prevState) => {
      return {
        count: prevState.count + value,
      };
    });
  }

  render() {
    return (
      <div className="flex gap-2">
        <button className="px-4 border" onClick={() => this.handleCounter(-1)}>
          {" "}
          -{" "}
        </button>
        <p>[Class] Counter {`${this.state.count}`}</p>
        <button className="px-4 border" onClick={() => this.handleCounter(1)}>
          {" "}
          +{" "}
        </button>
      </div>
    );
  }
}
