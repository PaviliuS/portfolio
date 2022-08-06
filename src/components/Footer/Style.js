import styled from 'styled-components';

export const Footer = styled.footer`
    display: flex; 
    flex-direction: column;
    width: 100%;
    height: 100%;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.bachgroundColor};
    box-shadow: 0px 0px 5px ${props => props.theme.shadowColor};
    transition: 0.1s;

`;

export const Notice = styled.a`
    &:hover{
        opacity: 0.9;
    }
    display: flex; 
    flex-direction: column;
    width: 100%;
    height: 100px;
    font-weight: 500;
    letter-spacing: 1px;
    font-size:  ${props => props.theme.textSizeTitle};
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.accentColor1}; 
    transition: 0.1s;
    color: white;
    @media (max-width: 768px) and (min-width: 576px)  { 
        font-size:  ${props => props.theme.textSizeTitle};
    }
    @media (max-width: 576px)  {
        font-size:  ${props => props.theme.textSizeTitle};
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 1000px;
    padding: 20px 20px;
    box-sizing: border-box;
    @media (min-width: 1200px){
        width: 1000px;
    }
    @media (max-width: 1200px) and (min-width: 992px)  {
        width: 900px;
    }
    @media (max-width: 992px) and (min-width: 768px)  {
        padding: 20px 20px;   
        width: 100%;
    }
    @media (max-width: 768px) and (min-width: 576px)  { 
        padding: 20px 20px;   
        
        width: 100%;
    }
    @media (max-width: 576px)  {
        padding: 20px 20px;
        flex-direction: column;
        align-items: flex-start;
        
        width: 100%;

    }
`;

export const Contacts = styled.div`
    display:flex; 
    flex-direction: column;
    flex-wrap: wrap;
`;
export const ContactsTitle = styled.span`
    display:flex;
    font-family: Roboto;
    font-weight: 500;
    letter-spacing: 1px;
    font-size:  ${props => props.theme.textSizeTextL};
    color: ${props => props.theme.accentColor1};
    margin: 0px 0px 10px 0px;   
`;
export const Title = styled.span`
    display:flex;
    width: 100%;
    flex: 1 1 auto;
    justify-content: flex-end;
    font-family: Roboto;
    letter-spacing: 1px;
    font-size:  ${props => props.theme.textSizeTextM};
    color: ${props => props.theme.textColor};
    margin: 0px 0px 0px 0px;  
    @media (max-width: 576px)  {
        justify-content: flex-start;
        margin: 20px 0px 0px 0px;  
    } 
`;