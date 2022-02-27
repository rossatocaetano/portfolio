import React from 'react';
import VideosComponent from '../../Components/VideosComponent';
import style from './VideosPage.module.scss';

const VideosPage = () => {
    const videos:string[] = ['https://www.youtube.com/embed/FOuonKpGK_c', 'https://www.youtube.com/embed/ONi404GH4sM?start=1983', 'https://www.youtube.com/embed/ulLE2_CgArc?start=1983', 'https://www.youtube.com/embed/Arwyghnf0b4']
    const titles:string[] = ['TV BRASIL Interview', '4th WeGo Awards - Winner at Open and Inclusive City', 'Campus Party Brasil - Printing Houses and Fab Labs', 'Brincando com Ideias - Meet the Fab Labs']
    
    return (
        <div>
            <h1 id ="public_policy_manager">PUBLIC POLICY MANAGER</h1>
            <VideosComponent videos={videos} titles={titles}></VideosComponent>
        </div>
        
    )
}

export default VideosPage