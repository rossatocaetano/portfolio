import React from 'react';
import { IContactMe } from '../../types/menu';
import style from './ContactMe.module.scss';

const ContactMe = (props:IContactMe) => {
    return (
        <div className='style.background'>
            <div className={style.iconsBackground}>            
                {props.icons.map((icon, index) => {
                    return (
                        <div key={`div${index}`} className={style.iconsContainer}>
                            <a href={props.links[index]} key={`a${index}`} target={'_blank'}>
                            <img src={icon} alt={props.alts[index]} key={`img${index}`} className={style.icons}></img>
                            </a>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ContactMe;