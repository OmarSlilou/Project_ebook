import logo from "./logo.svg";
import "./App.css";
import { About } from "./About/about";
import YourComponent from "./Nav/Naw";
import { Home } from "./Home/home";
import { Login } from "./Login/Login";
import Footer from "./Footer/footer";
import { Home1 } from "./Home1/home1";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Signup } from "./Singin up/SingnUp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <YourComponent />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Home />
                <Home1></Home1>
                <About />
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
