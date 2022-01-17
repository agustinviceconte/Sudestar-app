import "./App.css";
import Button from "react-bootstrap/Button";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";



export const App = () => {
  const acercaDe = () => alert("Copyright 2022");

  return (
    <div className="app">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a Sudestar"/>
      <Button variant="primary" onClick={acercaDe}>
        Acerca de
      </Button>
    </div>
  );
};






