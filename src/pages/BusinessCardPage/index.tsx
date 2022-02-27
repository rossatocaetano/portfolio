import React from 'react';
import style from './BusinessCardPage.module.scss'
import BusinessCard from '../../Components/BusinessCard';
import image from '../../assets/BusinessCard.png'

const BusinessCardPage = () => {
    const personalInformation:string[] = ['Raphael Rossato Caetano', '27 years old', 'Based in São Paulo', 'Web developer and public policy manager', 'Actually work at FAB LAB LIVRE SP', 'rossato.caetano@gmail.com'];

    return (
        <div>
            <h1 id="business_card">BUSINESS CARD</h1>
            <div className={style.cardcontainer}>            
                <BusinessCard items={personalInformation} image={image} vertical={false}></BusinessCard>
            </div>
        </div>
        
    )
}

export default BusinessCardPage;