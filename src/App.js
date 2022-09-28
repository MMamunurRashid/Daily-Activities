import "./App.css";
import Activities from "./Component/Activities/Activities";
import Header from "./Component/Header/Header";

function App() {
  return (
    <div className="bg-gray-100 pl-20 pb-10">
      <Header></Header>
      <Activities></Activities>
    </div>
  );
}

export default App;
