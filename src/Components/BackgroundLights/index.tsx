import React from "react";
import style from "./BackgroundLights.module.scss"

const BackgroundLights = () => {
    return (
        <div className={style.pageContainer}>
            <div className={style.ball1}></div>
            <div className={style.ball2}></div>
            <div className={style.ball3}></div>
        </div>
    )
}

export default BackgroundLights