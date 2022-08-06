import styled from "styled-components"

export const ItemCourse = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    flex-direction: row;
    margin: 0px 0px 50px 0px;
    &:last-child{
        margin: 0px 0px 0px 0px;
    }
    @media (max-width: 992px) and (min-width: 768px)  {      
        flex-direction: column;       
    }
    @media (max-width: 768px) and (min-width: 576px)  { 
        flex-direction: column;
    }
    @media (max-width: 576px)  {
        flex-direction: column;
    }
`;

export const Data = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column; 
    margin: 0px 0px 0px 120px;
    @media (max-width: 992px) and (min-width: 768px)  {   
        margin: 0px 0px 0px 0px;      
    } 
    @media (max-width: 768px) and (min-width: 576px)  {
        margin: 0px 0px 0px 0px;
    }
    @media (max-width: 576px)  {
        margin: 0px 0px 0px 0px;
    }
`;

export const Name = styled.span`
    display: flex;
    flex-wrap:wrap;
    font-size: ${props => props.theme.textSizeTextL};
    font-weight: 500; 
    line-height: 25px;
    margin: 0px 0px 5px 0px;
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextL700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextL500};
    }
`;

export const Author = styled.span`
    display: flex;
    flex-wrap:wrap;
    line-height: 20px;
    font-size: ${props => props.theme.textSizeTextM};
    /* margin: 0px 0px 10px 0px; */
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM};
    }
    @media (max-width: 576px)  {   
        font-size: ${props => props.theme.textSizeTextM};
    }
`;

