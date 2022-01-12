
import {CartWidget} from "../CartWidget/CartWidget";
import  styles  from "./NavBar.module.css";
import "../CartWidget/CartWidget.css"


export const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <h1>SUDESTAR</h1>
      <ul className={styles.menu}>
        <li className={styles.opcionMenu}>Cursos</li>
        <li className={styles.opcionMenu}>Noticias</li>
        <li className={styles.opcionMenu}>Contacto</li>
        </ul>
      <CartWidget className="carrito"/>
      </nav>
  
  );
};
