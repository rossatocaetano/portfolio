import React from 'react';
import VideosComponent from '../Components/VideosComponent';
import { Title, Container } from '../styles/sharedstyles';

const VideosPage = () => {
    const videos:string[] = ['https://www.youtube.com/embed/5yFdMCR-UJk', 'https://www.youtube.com/embed/W6RkxlRdc2I?start=5157', 'https://www.youtube.com/embed/FOuonKpGK_c', 'https://www.youtube.com/embed/ONi404GH4sM?start=1983', 'https://www.youtube.com/embed/ulLE2_CgArc?start=1983', 'https://www.youtube.com/embed/Arwyghnf0b4']
    const titles:string[] = ['GLOBO Interview', 'Raymundo Magliano Filho Awards', 'TV BRASIL Interview', '4th WeGo Awards - Winner at Open and Inclusive City', 'Campus Party Brasil - Printing Houses and Fab Labs', 'Brincando com Ideias - Meet the Fab Labs']
    
    return (
        <Container id='public_policy_manager'>            
            <Title>PUBLIC POLICY MANAGER</Title>
            <p>Here some videos of interviews, awards and talks there I made in my job as public policy manager at the FAB LAB LIVRE SP network, a program from São Paulo city hall</p>
            <VideosComponent videos={videos} titles={titles}></VideosComponent>
        </Container>
        
    )
}

export default VideosPage