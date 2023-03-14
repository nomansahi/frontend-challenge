import "./App.css";
import Navbar from "./components/Navbar";
import InputSearch from "./components/InputSearch";
// import CardDetails from "./components/CardDetails";
import Card from "./components/CardList";

function App() {
  return (
    <div>
      <Navbar />
      <InputSearch />
      <Card />
      {/* <CardDetails /> */}
    </div>
  );
}

export default App;
