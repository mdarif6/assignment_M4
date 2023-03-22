import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import DetailsPage from "./pages/detailspage/DetailsPage";
import { Route, Routes } from "react-router-dom";
import LayoutComponent from "./components/layout-component/LayoutComponent";

function App() {
  return (
    <div className="App">
      <LayoutComponent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:albumID" element={<DetailsPage />} />
        </Routes>
      </LayoutComponent>
    </div>
  );
}

export default App;
