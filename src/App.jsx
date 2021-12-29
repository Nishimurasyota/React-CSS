import ReactDom from "react-dom";
import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="App">
        <InlineStyle />
        <CssModules />
        <StyledJsx />
        <StyledComponents />
      </div>
    </>
  );
};
