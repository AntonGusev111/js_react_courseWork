import React from 'react'
import { NavLink } from 'react-router-dom'
import headerLogo from '../../assets/header-logo.png'
import BasketIcon from '../basket/BasketIcon'
import MenuSearchIcon from '../search/MenuSearchIcon'

export default function Menu() {
  return (
    <div className='row'>
        <div className='col'>
            <nav className='navbar navbar-expand-sm navbar-light bg-light'>
                <NavLink className='navbar-brand' to="/"><img src={headerLogo} alt='Bosa Noga'/></NavLink>
                <div className='collapase navbar-collapse' id="navbarMain">
                    <ul className='navbar-nav mr-auto'>
                        <NavLink className='nav-link' to="/"> Главная</NavLink>
                        <NavLink className='nav-link' to="/catalog.html">Каталог</NavLink>
                        <NavLink className='nav-link' to="/about.html">О Магазине</NavLink>
                        <NavLink className='nav-link' to="/contacts.html">Контакты</NavLink>
                    </ul>
                </div>
            </nav>
        </div>
        <MenuSearchIcon />
        <BasketIcon />
    </div>
  )
}
