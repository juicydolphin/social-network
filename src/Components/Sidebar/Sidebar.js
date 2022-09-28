import React from 'react';
import styles from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (

        <nav className={styles.sidebar}>
            <div className={styles.item}><NavLink to='/profile' className={ navData => navData.isActive ? styles.activeLink : styles.item }>Моя страница</NavLink></div>
            <div className={styles.item}><NavLink to='/messenger' className={ navData => navData.isActive ? styles.activeLink : styles.item }>Мессенджер</NavLink></div>
            <div className={styles.item}><NavLink to='/users' className={ navData => navData.isActive ? styles.activeLink : styles.item }>Пользователи</NavLink></div>
        </nav>

    );
};

export default Sidebar;