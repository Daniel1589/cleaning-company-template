import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage/MainPage";
import { NavBar } from "./components/NavBar/NavBar";
import { Plans } from "./pages/Plans";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { LogIn } from "./pages/LogIn";
import { BookNow } from "./pages/BookNow";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/plans" element={<Plans />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/booknow" element={<BookNow />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
