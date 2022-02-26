import React from 'react';
import BusinessCard from '../BusinessCard';
import { IProjects } from '../../types/menu';
import style from './Projects.module.scss'

const Projects = (props:IProjects) => {
    return (
        <div className={style.container}>
            {props.links.map((link, index) => {
                let image:string = props.images[index];
                return (
                    <div className={style.containerCard} key={index}>
                        <a href={link} target={'_blank'} key={index}>
                            <BusinessCard items={props.descriptions[index]} image={image} vertical={true} key={index}></BusinessCard>
                            
                        
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

export default Projects;