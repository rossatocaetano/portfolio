import styled from "styled-components"

export const Hidden = styled.div`
    position: absolute;
    top: -126px;
    visibility: hidden;
    height: 0;
    width: 0;
`

export const CardContainer = styled.div`
    height: calc(100vh - 168px);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: $palette2;
    overflow: hidden;  

`