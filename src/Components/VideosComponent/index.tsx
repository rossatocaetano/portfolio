import React from 'react';
import { IVideosComponent } from '../../types/menu';
import style from './VideosComponent.module.scss'

const VideosComponent = (props:IVideosComponent) => {
    return (
        <div className={style.background}>
            <div className={style.videosBackground}>
                {props.videos.map((video, index)=>{
                    return (
                        <div className={style.videosContainer}key={`div${index}`}>
                        <h2 className={style.videosTitles} key={`h2${index}`}>{props.titles[index]}</h2>
                        <iframe className={style.videos} src={video} title={props.titles[index] } allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" key={`iframe${index}`}></iframe>
                    </div>
                    )
                    
                })}        
            </div>
        </div>
    )
}

export default VideosComponent;

