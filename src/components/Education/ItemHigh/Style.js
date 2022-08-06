import styled from "styled-components"

export const Item = styled.div`
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
export const Image = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100px;
    margin: 0px 20px 0px 0px;
    @media (max-width: 992px) and (min-width: 768px)  { 
        margin: 0px 0px 20px 0px;    
        align-items: center;  
        width: 100%;
   }
    @media (max-width: 768px) and (min-width: 576px)  {   
        margin: 0px 0px 20px 0px;
        align-items: center;  
        width: 100%;
    }
   @media (max-width: 576px)  {   
        margin: 0px 0px 20px 0px;
        align-items: center;
        width: 100%;
   }
`;
export const Img = styled.img`
    display: flex;
    flex: 0 0 auto;
    width: 100px;
    height: 100px;
    object-fit: cover;
`;

export const Data = styled.div`
    display: flex;
    flex-direction: column; 
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

export const Company = styled.span`
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
export const CompanyAbout = styled.span`
    display: flex;
    flex-wrap:wrap;
    line-height: 20px;
    font-size: ${props => props.theme.textSizeTextM};
    margin: 0px 0px 20px 0px;
    @media (max-width: 768px) and (min-width: 576px)  {    
        font-size: ${props => props.theme.textSizeTextM700};
    }
    @media (max-width: 576px)  {
        
        font-size: ${props => props.theme.textSizeTextM500};
    }
`;

export const Period = styled.span`
    display: flex;
    flex-wrap:wrap;
    font-size: ${props => props.theme.textSizeTextM};
    font-weight: 600;
    letter-spacing: 1px;
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
    color: ${props => props.theme.accentColor1};
`;

