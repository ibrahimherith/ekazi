import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CandidatePage from "./pages/CandidatePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/candidate/:id" element={<CandidatePage />} />
        </Routes>
      </BrowserRouter>
      ;
    </>
  );
};

export default App;
