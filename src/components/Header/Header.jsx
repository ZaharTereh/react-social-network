import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import s from './Header.module.css'

const Header = (props) =>{
    return (
        <header className={s.header}>
            <img src='https://turbologo.com/articles/wp-content/uploads/2019/11/puma-logo-cover-1280x720.png'/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                
            </div>
        </header>
    );
}

export default Header;