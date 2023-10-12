import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import "./App.css";
function App() {
  return (
    <>
      <BrowserRouter basename="/web3_landing_page_react">
        <Routes>
          <Route exact path={"/"} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
