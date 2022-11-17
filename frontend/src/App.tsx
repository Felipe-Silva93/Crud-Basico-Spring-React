import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Form from "./pages/Form";
import Listing from "./pages/Listing";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":Id" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
