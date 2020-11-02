import React from 'react'
import s from './Header.module.css'

const Header = () =>{
    return (
        <header className={s.header}>
            <img src='https://turbologo.com/articles/wp-content/uploads/2019/11/puma-logo-cover-1280x720.png'/>
        </header>
    );
}

export default Header;