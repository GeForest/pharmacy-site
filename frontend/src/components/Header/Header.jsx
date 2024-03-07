import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'

function Header() {
    const [activeLink, setActiveLink] = useState('Shop');

    const links = [
        {name: 'Shop', path: '/'},
        {name: 'Shopping Cart', path: 'cart'}
    ];

    return (
    <div className={styles.header}>
        {links.map((link)=>{
            return (
            <Link to={link.path} key={link.name} 
            className={`${styles.header__link} ${activeLink === link.name ? styles.active : ''}`}
            onClick={() => setActiveLink(link.name)}
            >
                <h1>{link.name}</h1>
            </Link>
            )
        })}
    </div>
    );
}
  
  export default Header;