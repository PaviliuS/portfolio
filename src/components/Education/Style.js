import styled from 'styled-components';

export const Education = styled.div`
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
    justify-content: center;
    margin: 0px 0px 50px 0px;
`;
export const Title = styled.span`
    font-size:  ${props => props.theme.textSizeTitle};
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
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size:  ${props => props.theme.textSizeTitle700};
        width: 100%;
    }
    @media (max-width: 576px)  {
        font-size:  ${props => props.theme.textSizeTitle500};
        width: 100%;
    }
`;

export const List = styled.span`
    display: flex;
    flex-direction: column;
`;
export const ListHigh = styled.span`
    display: flex;
    flex-direction: column;
`;
export const Spacer = styled.span`
    font-size:  ${props => props.theme.textSizeTitle};
    letter-spacing: 1px;
    font-weight: 600;
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin: 50px 0px;
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size:  ${props => props.theme.textSizeTitle700};  
    }
    @media (max-width: 576px)  {
        font-size:  ${props => props.theme.textSizeTitle500};
    }
`;
export const ListCourse = styled.span`
    display: flex;
    flex-direction: column;
`;



