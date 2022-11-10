import "./App.css";
import * as React from "react";
import Principal from "./pages/Principal.jsx";
import {  ThemeProvider } from '@mui/material/styles';
import theme  from "./theme/theme.jsx"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Principal />
      </div>
    </ThemeProvider>
  );
}

export default App;
