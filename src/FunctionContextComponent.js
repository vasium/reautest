import React, { useContext } from "react";
import { ThemeProvider } from "./ThemeContext";

function FunctionContextComponent() {
  const darkTheme = useContext(ThemeProvider);
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return <div style={themeStyles}>Function Theme</div>;
}

export default FunctionContextComponent;
