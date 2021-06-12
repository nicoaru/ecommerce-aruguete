import React from 'react';
import './navBar.css';
import logo from '../../../recursos/logo-color-blanco.png'
import bajada from '../../../recursos/bajada-blanco.png'
function NavBar() {

    return (
        <div className='navBar'>
            <img src={logo} height='50px' width='50px' alt='logo'/>
            <img src={bajada} height='40px' alt='bajada'/>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    Nuestras Pizzas
                </li>
                <li>
                    Comprar
                </li>
            </ul>
        </div>


    );
}

export { NavBar }