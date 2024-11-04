import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";
import mail from "./assets/mail.svg";

function App() {
  return (
    <Routes>
      <Route path="/" element={Home(mail, github, linkedin)} />
    </Routes>
  );
}

export default App;
