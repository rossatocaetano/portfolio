import React from 'react';
import {IMenu} from '../../../types/menu';
import style from './Menu.module.scss';

const Menu = (props: IMenu) => {
    return (
        <ul className={style.menu}>
            {props.links.map((link, index) => {
                return (
                    <li className={style.menu__list} key={index}>
                        {link}
                    </li>)
            })}
        </ul>    
    )
}

export default Menu;