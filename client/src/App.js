import "./App.css";
import AllRoutes from "./AllRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <AllRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
