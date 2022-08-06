import styled from 'styled-components';

export const Skills = styled.div`
    display: flex; 
    width: 100%;
    height: 100%;
    flex: 0 0 auto;
    justify-content: center;
    background-color: ${props => props.theme.bachgroundColor};
    transition: 0.1s;
`;

export const Content = styled.div`
    background-color: ${props => props.theme.iconColor};
    border-radius: 15px;
    box-shadow: 0px 0px 15px ${props => props.theme.shadowColor};
    display: flex;
    flex-direction: column;
    width: 1000px;
    padding: 20px 20px;   
    margin: 100px 0px;
    box-sizing: border-box;
    @media (min-width: 1200px){
        width: 1000px;
    }
    @media (max-width: 1200px) and (min-width: 992px)  {     
        width: 900px;
    }
    @media (max-width: 992px) and (min-width: 768px)  {    
        margin: 50px 20px;
        flex-direction: column;
        width: 100%;
    }
    @media (max-width: 768px) and (min-width: 576px)  {     
        margin: 50px 20px;
        flex-direction: column;
        width: 100%;
    }
    @media (max-width: 576px)  {    
        margin: 50px 20px;
        flex-direction: column;
        width: 100%;
    }

`;

export const ContentTitle = styled.div`
    display: flex;
    justify-content: right;
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
    font-size: ${props => props.theme.textSizeTitle};
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle700};
        width: 100%;
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle500};
        width: 100%;
    }
`;
export const Text = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    text-align: center;
    line-height: 25px;
    font-size: ${props => props.theme.textSizeTextM};
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
`;
export const List = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    box-sizing: border-box;
    margin: 30px 0px 30px 0px;   
`;

export const ContentButton = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const Button=styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 250px;
    height: 50px;
    border-radius: 50px;
    border: 0;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.backgroundColor};
    box-shadow: 0px 0px 3px ${props => props.theme.shadowColor} ;
    color: ${props => props.theme.textColor};
    &:hover{
        background-color: ${props => props.theme.accentColor1};
        color: white;
        transition: 0.1s;
    }
    &:focus{
        outline: none;   
    }
    cursor: pointer;
    transition: 0.1s;
    font-size: ${props => props.theme.textSizeTextM};
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM700};
        width: 100%;
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
        width: 100%;
    }
`;