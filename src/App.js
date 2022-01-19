import "./App.css";
import Button from "react-bootstrap/Button";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
//import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
//import {link} from "react-router-dom"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

export const App = () => {
  const acercaDe = () => alert("Copyright 2022");

  return (
    <div className="app">
      <NavBar />
      <h1 className="titleSection">Bienvenidos a Sudestar</h1>
      <ItemDetailContainer/>
      <ItemListContainer greeting="Ingrese Cantidad"/>
      <Button className="button" variant="primary" onClick={acercaDe}>
        Acerca de
      </Button>
    </div>
  );
};





