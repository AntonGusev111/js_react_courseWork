import React from 'react'
import icon from '../../assets/basket .png'
import { NavLink } from 'react-router-dom'

export default function BasketIcon() {
    const count = 0;
  return (
    <div>
        { count > 0? <div className='basket-menu-count'>{count}</div>:''}
        <NavLink className='navbar-brand' to="/cart.html"><img src={icon} alt='basket'/></NavLink>
    </div>
  )
}
