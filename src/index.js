import * as React from "react";
import ReactDOM from "react-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import CustomPicker from "./CustomPicker";

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <CustomPicker />
  </StyledEngineProvider>,
  document.querySelector("#root")
);
