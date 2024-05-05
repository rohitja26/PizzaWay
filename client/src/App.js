import "./App.css";
import "bootstrap";
import Navbar from "./component/Navbar";
import CartPage from "./Services/Cartpage";
import Homepage from "./Services/Homepage";
import { BrowserRouter, Link, Switch, Route, Routes } from "react-router-dom";
import Loginpage from "./Services/Loginpage";
import Registerpage from "./Services/Registerpage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={Homepage} />
          <Route path="/cart" exact Component={CartPage} />
          <Route path="/login" exact Component={Loginpage} />
          <Route path="/register" exact Component={Registerpage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
