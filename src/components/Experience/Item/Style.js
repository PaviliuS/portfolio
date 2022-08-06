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
    width: 150px;
    margin: 0px 20px 0px 0px;
    @media (max-width: 992px) and (min-width: 768px)  { 
        margin: 0px 0px 0px 0px;    
        width: 100%;
   }
    @media (max-width: 768px) and (min-width: 576px)  {   
        margin: 0px 0px 0px 0px;
        width: 100%;
    }
   @media (max-width: 576px)  {   
        margin: 0px 0px 0px 0px;
        width: 100%;
   }
`;
export const Img = styled.img`
    display: flex;
    flex: 0 0 auto;
    width: 150px;
    height: 150px;
    object-fit: cover;
`;

export const Data = styled.div`
    display: flex;
    flex-direction: column; 
    @media (max-width: 992px) and (min-width: 768px)  {   
        margin: 30px 0px 0px 0px;  
        width: 100%;
     } 
     @media (max-width: 768px) and (min-width: 576px)  {
        margin: 30px 0px 0px 0px;  
        width: 100%;
    }
    @media (max-width: 576px)  {
        margin: 30px 0px 0px 0px;  
        width: 100%;
    }
`;

export const Company = styled.span`
    display: flex;
    flex-wrap:wrap;
  
    font-weight: 500; 
    margin: 0px 0px 10px 0px;
    line-height: 25px;
    font-size: ${props => props.theme.textSizeTextL};
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
    font-size: 20px;
    line-height: 25px;
    font-size: ${props => props.theme.textSizeTextM};
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
        
    }
`;
export const Profession = styled.span`
    display: flex;
    flex-wrap:wrap;
    margin: 10px 0px 10px 0px;  
    
    font-weight: 500; 
    font-size: ${props => props.theme.textSizeTextM};
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
        
    }
`;
export const ProfessionAbout = styled.span`
    display: flex;
    flex-wrap:wrap;
    line-height: 20px;
    font-size: ${props => props.theme.textSizeTextM};
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};      
    }
`;
export const Period = styled.span`
    display: flex;
    font-family: monospace;
    min-height: 30px;
    flex: 0 0 auto;
    flex-wrap:wrap;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 10px 0px 0px 0px;  
    border-radius: 50px;
    color: white;
    background-color: ${props => props.theme.accentColor1};
    font-size: ${props => props.theme.textSizeTextM};
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};      
    }
`;

