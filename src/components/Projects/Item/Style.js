import styled from "styled-components"

export const Card1 = styled.div`
    border-radius: 15px;
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 250px;
    padding: 15px;
    box-sizing: border-box;
    background-color: ${props => props.theme.backgroundColor};
    box-shadow: 0px 0px 5px ${props => props.theme.shadowColor};
`;

export const Card2 = styled.div`
    border-radius: 15px;
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 200px;
    height: 250px;
    background: linear-gradient(to right, ${props=>props.color1}, ${props=>props.color2});
    font-size: 30px;
    bottom: 20px;
    right: 20px;
    transition:0.5s;
    overflow: hidden;    
`;

export const BackgroundText = styled.div`
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    opacity: 0.1;
    color: black;
    word-break: break-all;
    font-size: 60px;
    font-weight: 900;
    font-family: monospace;
`;
export const Text = styled.div`
    padding: 20px;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    text-align: center;
    opacity: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    color: white;
    letter-spacing: 1px;
    font-family: monospace;
    font-weight: 600;
    transition: 0.5s;
    z-index: 1;
    font-size: ${props => props.theme.textSizeTextM};
    @media (max-width: 768px) and (min-width: 576px)  {
        opacity: 1;}
    @media (max-width: 576px)  {     
        opacity: 1;
    }
`;

export const Name = styled.div`
    display:flex;
    width: 100%;
    font-family: monospace;
    font-weight: 600;
    font-size: ${props => props.theme.textSizeTextL};
    transition: 0.5s;
`;

export const Item = styled.div`
    display: flex;
    width: 250px;
    height: 320px;
    margin: 20px;
    &:hover{
        & ${Card1}{
            box-shadow: 0px 0px 30px  ${props=>props.color1};
            transition: 0.5s;
        }
        & ${Card2}{
            transition: 0.5s;
            bottom:0px;
            right: 0px;
        }
        & ${Name}{
            transition: 0.5s;
            font-size: 25px;
        }
        & ${Text}{
            transition: 0.5s;
            opacity:1;
        }
    }
`;

export const Content = styled.a`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center; 
    align-items: center;
`;