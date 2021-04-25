import React, { useState } from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import ClassContextComponent from "./ClassContextComponent";

export const CurrentValue = React.createContext();

export function ThemeContext({ children }) {
  const [darkThemeTrueFalse, setDarkThemeTrueFalse] = useState(true);

  function toggleTheme() {
    setDarkThemeTrueFalse((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <CurrentValue.Provider value={darkThemeTrueFalse}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <FunctionContextComponent />
      <ClassContextComponent />
    </CurrentValue.Provider>
  );
}
