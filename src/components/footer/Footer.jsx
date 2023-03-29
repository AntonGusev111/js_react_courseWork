import React from 'react';
import { NavLink } from 'react-router-dom';
import sprite from '../../assets/footer-sprite.png'

export default function Footer() {
  return (
    <footer className='container bg-light footer'>
        <div className='row'>
            <div className='col'>
                <section>
                    <h5>Информация</h5>
                    <ul className='nav flex-column'>
                        <li className='nav-item-footer'>
                            <NavLink to='/about.html' className='nav-link-footer'>О Магазине</NavLink>
                        </li>
                        <li className='nav-item-footer'>
                            <NavLink to='/catalog.html' className='nav-link-footer'>Каталог</NavLink>
                        </li>
                        <li className='nav-item-footer'>
                            <NavLink to='/contacts.html' className='nav-link-footer'>Контакты</NavLink>
                        </li>
                    </ul>
                </section>

            </div>

            <div className='col'>
                <section>
                    <h5>Принимаем к оплате:</h5>
                    <img src={sprite} className="sprite" alt='Visa MasterCard PayPall' />
                </section>
                <section>
                    <div className='footer-copyright'>
                        2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и аксессуаров. Все права защищены.
                        <br></br>
                        Доставка по всей России!
                    </div>
                </section>
            </div>
            <div className='col text-right'>
                <section className='footer-contacts'>
                    <h5>Контакты</h5>
                    <a className='footer-contacts-phone' href="tel:+7-495-790-35-03">+7 495 79 03 5 03</a>
                    <span className='footer-contacts-working-hours'>Ежедневно: с 09-00 до 21-00</span>
                    <a className='footer-contacts-email' href="mailto:office@bosanoga.ru">office@bosanoga.ru</a>
                </section>
                
            </div>
        </div>
    </footer>
  )
}
