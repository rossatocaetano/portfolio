import React from 'react';
import {IMenu} from '../../../types/menu';
import style from './Menu.module.scss';

const Menu = (props: IMenu) => {
    return (
        <ul className={style.menu}>
            {props.titles.map((title, index) => {
                return (
                    
                        <li className={style.menu__list} key={index}>            
                            <a href={props.links[index]} key={`a${index}`}>{title}</a>
                        </li>
                    )
            })}
        </ul>    
    )
}

export default Menu;