import styled from "styled-components"

export const Link = styled.div`
    display:flex;
    font-family: Roboto;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    padding: 0px 0px 0px 20px;
    box-sizing: border-box;
    margin: 0px 0px 10px 0px;
    &:last-child{
        margin: 0px 0px 0px 0px;
    }
`;

export const Content = styled.a`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    color:${props => props.theme.textColor};
    @media (min-width: 768px)  {   
        &:hover{
            color:${props => props.theme.accentColor1};
            transition: 0.1s;
        }
    }
`;

export const Name = styled.div`
    font-weight: 400;
    transition: 0.1s;
    font-size:  ${props => props.theme.textSizeTextM};
`;

export const Icon = styled.div`
    display: flex;
    flex: 0 0 auto;
    font-size:  ${props => props.theme.textSizeTextL};
    margin: 0px 10px 0px 0px;
    transition: 0.1s;
`;
