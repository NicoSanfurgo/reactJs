import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './navBar.css'

export const NavBar = () => {
    const menus = ['Articles Gaming', 'Figuras', 'Remeras', 'Soporte']
    return (
        <div>
           <div className="navbar">
            {menus.map((menu, index) => {
                return <a href='#' key={index} className="navMenu">{menu}</a>
            })}
            <div className='carrito'><CartWidget /></div>
           </div>
        </div>
    );
}

export default NavBar;