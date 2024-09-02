import "./App.css";
import mail from "./assets/mail.svg";
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";

function App() {
  return (
    <>
      <div className="container-custome">
        <h1>Hey, it&apos;s Franco Vasquez</h1>
        <div className="subtitle-container">
          <p>
            Software Engineering Student @{" "}
            <a href="https://www.upc.edu.pe/">UPC</a>
          </p>
          <p>
            Cloud & Automation Intern @{" "}
            <a href="https://www.entel.pe/">Entel Perú</a>
          </p>
        </div>
        <div className="logos-container">
          <a href="mailto:vasquezemmanuel439@gmail.com">
            <img src={mail} />
          </a>
          <a href="https://github.com/FrancoEVP10">
            <img src={github} />
          </a>
          <a href="https://www.linkedin.com/in/franco-vasquez-poma-435190211/">
            <img src={linkedin} />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
