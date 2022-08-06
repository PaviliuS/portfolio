import styled from "styled-components"

export const Icon = styled.div`
    display: flex;
    width: 150px;
    height: 150px;
    border-radius:50%;
    background:${props=>props.theme.backgroundColor};
    justify-content: center;
    align-items: center;
    font-size: 50px;
    transition: 0.3s ease;
`;
export const Item = styled.div`
    display: flex;
    width: 250px;
    height: 250px;
    margin: 20px;
    &:hover{
        & ${Icon}{
            width: 165px;
            height: 165px;
            font-size: 80px;
            transition: 0.3s ease;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const ContentIcon = styled.div`
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    border-radius:50%;
    box-shadow: 0px 0px 30px ${props=>props.color1};
    background: linear-gradient(to right, ${props=>props.color1}, ${props=>props.color2});
`;



export const Name = styled.div`
    display:flex;
    flex: 0 0 auto;
    width: 100%;
    height: 50px;
    justify-content: center;
    align-items: flex-end;
    font-family: monospace;
    font-weight: 600;
    font-size: ${props=>props.theme.textSizeTextL};
`;