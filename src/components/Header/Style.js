import styled from 'styled-components';

export const Header = styled.header`
    display: flex; 
    width: 100%;
    min-height: 100px;
    align-items: center;
    color: ${props => props.theme.textColor};
    box-shadow: 0px 0px 15px ${props => props.theme.shadowColor};
    background-color: ${props => props.theme.backgroundColor};
    top: 0;
    position: sticky;
    overflow: hidden;
    z-index: 50;
`;

export const Content = styled.div`
    display: flex;
    align-items: center; 
    width: 100%;
    height: 100%;
    padding: 0px 20px;
    background-color: ${props => props.theme.backgroundColor};
    box-sizing: border-box;
`;

export const Logo = styled.div`
    display: flex;
    flex: 1 1 auto; 
    align-items: center; 
`;

export const Name = styled.span`
    display: flex;
    align-items: center;
    font-size: ${props => props.theme.textSizeTitle};
    font-weight: 500;
    font-family: Roboto;
    letter-spacing: 1px;
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle};
    }
`;


export const Buttons3 = styled.div`
    display:flex;
    @media (max-width: 768px) and (min-width: 576px)  {
        display:none;
    }
    @media (max-width: 576px)  {
        display:none;
    }

`;
export const Buttons = styled.div`
    display:none;
    @media (max-width: 768px) and (min-width: 576px)  {
        display:flex;
    }
    @media (max-width: 576px)  {
        display:flex;
    }
`;

