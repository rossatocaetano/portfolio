import React from 'react';
import Menu from './Menu/index'
import {IMenu} from '../../types/menu';
import style from './Navbar.module.scss'
import logo from '../../assets/logo.png'
import { isPropertyAccessOrQualifiedName } from 'typescript';

const Navbar = (props: IMenu) => {
    return (
        <header className={style.navbar}>
            <figure className={style.logoBox} >
                <img height={100} className={style.logo} alt="logo" src={logo} />
            </figure>
        <nav>
            <Menu titles={props.titles} links={props.links}></Menu>         
        </nav>
        </header>
        
    )
}



export default Navbar;