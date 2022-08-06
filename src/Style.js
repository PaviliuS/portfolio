import styled from 'styled-components';

export const App = styled.div`
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    background-color: ${props=> props.theme.backgroundColor};
    color: ${props=> props.theme.color};
    transition: all 0.1s;

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

export const Content = styled.div`
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    width: 100%;
    height: 100%;

    @media (min-width: 1200px){
    }
    @media (max-width: 1200px) and (min-width: 992px)  {
    }
    @media (max-width: 992px) and (min-width: 768px)  {
    }
    @media (max-width: 768px) and (min-width: 576px)  {
    }
    @media (max-width: 576px)  {
    }


`;

export const Route = styled.div`  
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;