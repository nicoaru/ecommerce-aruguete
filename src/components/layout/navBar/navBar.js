import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartWidget } from '../../cartWidget/cartWidget';
import './navBar.css';
import logo from '../../../recursos/logo-color-negro.png';
import bajada from '../../../recursos/bajada-blanco.png';


function NavBar() {
    return (
        <div className='navBar'>
            <Link className='link' exact to='/'>
                <img src={logo} height='50px' width='50px' alt='logo'/>
                <img src={bajada} height='40px' alt='bajada'/>
            </Link>
            <ul>
                <li>
                    <NavLink activeClassName='link-active' className='link' exact to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='link-active' className='link' to='/category/pizzas'>Pizzas</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='link-active' className='link' to='/category/empanadas'>Empanadas</NavLink>
                </li>
            </ul>
            <CartWidget/>
        </div>


    );
}

export { NavBar }