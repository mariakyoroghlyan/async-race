// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Garage from "./pages/Garage";
import Winners from "./pages/Winners";
import Main from "./components/layout/Main/Main";

function App() {
  return (
    <Router>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Garage />} />
          <Route path="/winners" element={<Winners />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </Main>
    </Router>
  );
}

export default App;
