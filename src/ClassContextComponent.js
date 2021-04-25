import React, { Component } from "react";
import { CurrentValue } from "./ThemeContext";

class ClassContextComponent extends Component {
  themeStyles(dark) {
    return {
      backgroundColor: dark ? "#333" : "#CCC",
      color: dark ? "#CCC" : "#333",
      padding: "2rem",
      margin: "2rem",
    };
  }

  render() {
    return (
      <CurrentValue.Consumer>
        {(darkTheme) => {
          return <div style={this.themeStyles(darkTheme)}>Class Theme</div>;
        }}
      </CurrentValue.Consumer>
    );
  }
}

export default ClassContextComponent;
