import "./App.css";
import Button from "react-bootstrap/Button";
import { NavBar } from "./components/navBar/navBar";
import "./components/navBar/navBar.css";

export const App = () => {
  const sayName = () =>
    alert(
      "Sudestar es una comunidad dedicada a la difusión de contenido audiovisual"
    );
  return (
    <div className="app">
      <NavBar />
      <Button variant="primary" onClick={sayName}>
        Acerca de
      </Button>
    </div>
  );
};
