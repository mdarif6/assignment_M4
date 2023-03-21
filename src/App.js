import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import DetailsPage from "./pages/detailspage/DetailsPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:albumID" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
