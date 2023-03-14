import "./App.css";
import Navbar from "./components/Navbar";
import InputSearch from "./components/InputSearch";

import Card from "./components/CardList";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import CardList from "./components/CardList";

function App() {
  return (
    <div>
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
