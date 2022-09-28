import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (

        <header className={styles.header}>
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/VK_logo_Blue_512x512.png/220px-VK_logo_Blue_512x512.png'/>

            <div className={styles.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Выйти</button></div>
                    : <NavLink to={'/login'}>Войти</NavLink>}
            </div>
        </header>

    );
};

export default Header;
