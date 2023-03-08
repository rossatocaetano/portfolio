import React from 'react';
import style from './BusinessCardPage.module.scss'
import BusinessCard from '../../Components/BusinessCard';
import image from '../../assets/BusinessCard.png'
import BackgroundLights from '../../Components/BackgroundLights';

const BusinessCardPage = () => {
    const personalInformation:string[] = ['Raphael Rossato Caetano', '28 years old', 'Based in São Paulo', 'Web developer and public policy manager', 'Actually work at FAB LAB LIVRE SP', 'rossato.caetano@gmail.com'];

    return (
        <>
        <div className={style.hidden}></div>
        <div className={style.pageContainer}>  
                  
            <div className={style.cardContainer}>  
                <BusinessCard items={personalInformation} image={image} vertical={false}></BusinessCard>
            </div>
            <BackgroundLights></BackgroundLights>
        </div>
        </>
        
    )
}

export default BusinessCardPage;