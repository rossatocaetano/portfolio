import React from 'react';
import BusinessCard from '../Components/BusinessCard';
import BackgroundLights from '../Components/BackgroundLights';
import { CardContainer } from '../styles/card';

const BusinessCardPage = () => {
    const personalInformation:string[] = ['Raphael Rossato Caetano', '28 years old', 'Based in São Paulo', 'Web developer and public policy manager', 'Actually work at FAB LAB LIVRE SP', 'rossato.caetano@gmail.com'];
    const image = '/image/business/BusinessCard.png'
    return (
        <>
        <CardContainer>
            <div>  
                <BusinessCard items={personalInformation} image={image} vertical={false}></BusinessCard>
            </div>
            <BackgroundLights></BackgroundLights>
        </CardContainer>
        </>
        
    )
}

export default BusinessCardPage;