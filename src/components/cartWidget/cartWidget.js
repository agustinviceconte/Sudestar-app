import React from 'react'
import carrito from './carrito.png'
import "./CartWidget.css"

console.log(carrito);

export const CartWidget= ()=> {
  return (
    <div className='carrito'>
    <img src={carrito} alt="Carrito"/>
    </div>
  )
};
