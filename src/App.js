import "./App.css";
import Activities from "./Component/Activities/Activities";
import Header from "./Component/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blog from "./Component/Blog/Blog";

function App() {
  return (
    <div className="bg-gray-100 app pb-10">
      <ToastContainer></ToastContainer>
      <Header></Header>
      <Activities></Activities>
      <Blog></Blog>
    </div>
  );
}

export default App;
