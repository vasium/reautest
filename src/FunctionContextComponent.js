import React, { useContext } from "react";
import { CurrentValue } from "./ThemeContext";

function FunctionContextComponent() {
  const darkTheme = useContext(CurrentValue);

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return <div style={themeStyles}>Function Theme</div>;
}

export default FunctionContextComponent;
