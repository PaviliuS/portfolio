import styled, { keyframes } from 'styled-components';

const printCursor = keyframes`
    0%{
        border-right: 3px solid ${props => props.theme.textColor};
    }
    50%{
        border-right: 3px solid transparent;
    }
    100%{
        border-right: 3px solid ${props => props.theme.textColor};
    }
`;
const printText = keyframes`
    0%{
        width: 9ch;
    }
    20%{
        width: 18ch;
    }80%{
        width: 18ch;
    }
    100%{
        width: 9ch;
    }
`;
const outlineImg = keyframes`
    0%{
        outline: 3px solid ${props => props.theme.accentColor1};
    }
    50%{
        outline: 3px solid transparent;
    }

    100%{
        outline: 3px solid ${props => props.theme.accentColor1};
    }
`;

export const About = styled.div`
    display: flex; 
    width: 100%;
    height: 100%;
    flex: 0 0 auto;
    justify-content: center;
    background-color: ${props => props.theme.bachgroundColor};
    transition: 0.1s;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 1000px;
    padding: 0px 10px;
    margin: 100px 0px;
    box-sizing: border-box;
    @media (min-width: 1200px){
        width: 1000px;
    }
    @media (max-width: 1200px) and (min-width: 992px)  {
        width: 900px;
    }
    @media (max-width: 992px) and (min-width: 768px)  {
        padding: 0px 20px;   
        margin: 50px 0px;
        flex-direction: column;
        width: 100%;
    }
    @media (max-width: 768px) and (min-width: 576px)  { 
        padding: 0px 20px;   
        margin: 50px 0px;
        flex-direction: column;
        width: 100%;
    }
    @media (max-width: 576px)  {
        padding: 0px 20px;
        margin: 50px 0px;
        flex-direction: column;
        width: 100%;
    }
`;

export const ContentTitle = styled.div`
    display: flex;
    width: 100%;
    flex: 0 0 auto;
    margin: 0px 0px 50px 0px;
`;
export const Title = styled.span`
    font-size: 25px;
    letter-spacing: 1px;
    font-weight: 600;
    display: flex;
    flex: 0 0 auto;
    width: 350px;
    height: 60px;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border: 5px solid ${props => props.theme.accentColor1};

    font-size:  ${props => props.theme.textSizeTitle};
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size:  ${props => props.theme.textSizeTitle700};
        width: 100%;
    }
    @media (max-width: 576px)  {
        font-size:  ${props => props.theme.textSizeTitle500};
        width: 100%;
    }
`;

export const ContentData = styled.div`
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    flex-direction: row;
    box-sizing: border-box;
    width: 100%;
    @media (max-width: 992px) and (min-width: 768px)  {      
        flex-direction: column-reverse;
    }
    @media (max-width: 768px) and (min-width: 576px)  { 
        flex-direction: column-reverse;
    }
    @media (max-width: 576px)  {
        flex-direction: column-reverse;
    }
`;
export const Data = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 50px 0px 0px;
  
    @media (max-width: 992px) and (min-width: 768px)  {     
        width: 100%;
        margin: 50px 0px 0px 0px;
     } 
     @media (max-width: 768px) and (min-width: 576px)  {
        width: 100%;
        margin: 50px 0px 0px 0px;
    }
    @media (max-width: 576px)  {
        width: 100%; 
        margin: 50px 0px 0px 0px;
    }
`;

export const Name = styled.span`
    font-family: monospace;
    font-weight: 600;
    display: flex;
    overflow: hidden;
    white-space: nowrap;
    color: ${props => props.theme.textColor};
    font-size: 50px;
    @media (max-width: 992px) and (min-width: 768px)  {    
        font-size: 40px;   
    }
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: 30px;
    }
    @media (max-width: 576px)  { 
        font-size: 25px;
    }
`;
export const NameAnimation = styled.span`
    width: 20ch;
    font-family: monospace;
    font-weight: 600;
    display: flex;
    overflow: hidden;
    white-space: nowrap;
    color: ${props => props.theme.textColor};
    border-right: 3px solid ${props => props.theme.textColor};
    animation: ${printCursor} 1s step-end infinite, ${printText} 10s steps(9) infinite;
    
    font-size: 50px; 
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: 30px;
    }
    @media (max-width: 576px)  {
        font-size: 25px;
    }
`;

export const Text = styled.span`
    display: flex;
    flex-wrap:wrap;
    line-height: 25px;
    margin: 20px 0px 0px 0px;

    font-size: ${props => props.theme.textSizeTextM};  
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM700};  
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};  
    }
`;

export const Image = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 250px;
    justify-content: center;
    align-items: center;
    @media (max-width: 992px) and (min-width: 768px)  {       
       width: 100%;
   }
    @media (max-width: 768px) and (min-width: 576px)  {     
        width: 100%;
    }
   @media (max-width: 576px)  {   
       width: 100%;
   }
`;

export const Img = styled.img`
    display: flex;
    flex: 0 0 auto;
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 50%;
    box-sizing: border-box;
    z-index: 1;
    box-shadow: 0px 0px 30px ${props=>props.theme.accentColor1};
    outline: 3px solid ${props => props.theme.accentColor1};
    animation: ${outlineImg} 10s ease infinite;
    
    @media (max-width: 576px)  {   
        width: 250px;
        height: 250px;
   }
`;