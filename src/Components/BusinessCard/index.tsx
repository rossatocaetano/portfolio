import React from 'react';
import style from './BusinessCard.module.scss';
import image from '../../assets/BusinessCard.png'

const BusinessCard = () => {
    return (
        
        <div className={style.container}>
            <div className={style.businesscard}>
                <img className={style.image} alt='logo' src={image} />
                
                <ul className={style.information}>
                    <li>Raphael Rossato Caetano</li>
                    <li>27 years old</li>
                    <li>Based at São Paulo</li>
                    <li>Web developer and public policy manager</li>
                    <li>Actually work at FAB LAB LIVRE SP</li>
                    <li><a href='mailto: rossato.caetano@gmail.com'>rossato.caetano@gmail.com</a></li>
                </ul>


            </div>
            
        </div>
    )
}

export default BusinessCard;