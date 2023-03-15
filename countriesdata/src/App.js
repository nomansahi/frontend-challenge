import "./App.css";
import Navbar from "./components/Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardList from "./components/CardList";
import CountryDetail from "./components/CountryDetail";

function App() {
  return (
    <div className="homepageSize">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <CardList />
              </div>
            }
          />
          <Route path="/:name" element={<CountryDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
