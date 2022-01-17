import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./config/routes";

function App() {
  return (
    <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter>
  );
}

export default App;
