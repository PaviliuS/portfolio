import styled, { keyframes } from 'styled-components';

export const Navbar = styled.nav`
    display: flex; 
    position: fixed;
    overflow-y:scroll;
    opacity: ${props => props.menu === true ? '1' : '0'}; 
    pointer-events: ${props => props.menu === true ? 'all' : 'none'}; 
    width: 400px;
    height: 100%;

    color: ${props => props.theme.textColor};
    transition: all 0.1s ease;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.backgroundColor};
    box-shadow: 0px 0px 5px ${props => props.theme.shadowColor};
    z-index: ${props => props.menu === true ? '60' : '55'};;
    overflow-y: hidden;
    @media (max-width: 576px)  {
        width: 100%;
    }
 
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 100%;
    padding: 0px 20px;
    box-sizing: border-box;
    overflow-y: scroll;
    @media (max-width: 576px)  {
        width: 100%;
        padding: 0px 20px;
    }
    &::-webkit-scrollbar {
        width: 3px;
    }
    &::-webkit-scrollbar-track {
        background-color: ${props => props.theme.iconColor};
    }
    &::-webkit-scrollbar-thumb {
        background: ${props => props.theme.accentColor1};
    }
`;

export const Logo = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    margin: 50px 0px;
    align-items: center; 
`;

const changeColor = keyframes`
    0%{
        outline-color: ${props => props.theme.accentColor1};
    }
    50%{
        outline-color: transparent;
    }
    100%{
        outline-color: ${props => props.theme.accentColor1};
    }    
`;
export const Image = styled.img`
    display: flex;
    flex: 0 0 auto;
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 50%;
    outline: 3px solid  ${props => props.theme.accentColor1};
    box-shadow: 0px 0px 30px ${props=>props.theme.accentColor1};
    box-sizing: border-box;
    animation: ${changeColor} 5s ease infinite;
    margin: 0px 0px 50px 0px;
    @media (max-width: 576px)  {
        width: 210px;
        height: 210px;
    }
`;

export const Name = styled.span`
    display: flex;
    font-size: ${props => props.theme.textSizeTitle};
    font-weight: 500;
    font-family: Roboto;
    letter-spacing: 1px;
    margin: 0px 0px 5px 0px;
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle}
    }  
`;

export const About = styled.span`
    display: flex;
    font-size: ${props => props.theme.textSizeTextM};
    font-weight: 400;
    font-family: Roboto;
    letter-spacing: 1px;
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM}
    }
`;

export const Links = styled.div`
    display:flex;
    width: 100%;
    flex-direction: column;
    margin: 0px 0px 30px 0px;
`;

export const LinksTitle = styled.span`
    display:flex;
    font-family: Roboto;
    font-weight: 500;
    letter-spacing: 1px;
    font-size: ${props => props.theme.textSizeTextL};
    color: ${props => props.theme.accentColor1};
    margin: 0px 0px 10px 0px;
`;

export const Contacts = styled.div`
    display:flex;
    width: 100%;
    flex-direction: column;
    margin: 0px 0px 30px 0px;
`;

export const ContactsTitle = styled.span`
    display:flex;
    font-family: Roboto;
    font-weight: 500;
    letter-spacing: 1px;
    font-size: ${props => props.theme.textSizeTextL};
    color: ${props => props.theme.accentColor1};
    margin: 0px 0px 10px 0px;   
`;

export const Buttons = styled.div`
    display:flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0px 0px 50px 0px;
`;


