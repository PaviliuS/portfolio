import {createGlobalStyle} from "styled-components";

export const darkTheme = {
  backgroundColor: '#1F2023', //
  textColor: '#F5F5F5',       //
  infoIconColor:'#2D2F34',    //
  iconColor:'#27292D',        //
  accentColor1:'#0072ff',
  accentColor2:'#00c6ff',
  shadowColor:'rgba(0,0,0,0.2)',

  textSizeTitle:'25px',
  textSizeTitle900:'22px',
  textSizeTitle700:'22px',
  textSizeTitle500:'22px',

  textSizeTextL:'22px',
  textSizeTextL900:'20px',
  textSizeTextL700:'20px',
  textSizeTextL500:'20px',

  textSizeTextM:'16px',
  textSizeTextM900:'14px',
  textSizeTextM700:'14px',
  textSizeTextM500:'14px',

  textSizeTextS:'12px',
  textSizeTextS900:'10px',
  textSizeTextS700:'10px',
  textSizeTextS500:'10px',

  borderRadius:'15px',
} 

export const lightTheme = {   
  backgroundColor: 'white', //white
  textColor: 'black',       //black
  infoIconColor:'#FAFAFA',  //50
  iconColor:'white',      //100 #F5F5F5
  accentColor1:'#0072ff',
  accentColor2:'#00c6ff',
  shadowColor:'rgba(0,0,0,0.2)',

  textSizeTitle:'25px',
  textSizeTitle900:'22px',
  textSizeTitle700:'22px',
  textSizeTitle500:'22px',

  textSizeTextL:'22px',
  textSizeTextL900:'20px',
  textSizeTextL700:'20px',
  textSizeTextL500:'20px',

  textSizeTextM:'16px',
  textSizeTextM900:'14px',
  textSizeTextM700:'14px',
  textSizeTextM500:'14px',

  textSizeTextS:'12px',
  textSizeTextS900:'10px',
  textSizeTextS700:'10px',
  textSizeTextS500:'10px',

  borderRadius:'15px',
}

export const GlobalStyle = createGlobalStyle`

  a{
    font-family: 'Roboto';
    font-weight: 400;
    text-decoration: none;
    color: ${props => props.theme.textColor};
  }
  li{
    /* list-style: none; */
    /* margin: 0px;
    padding: 0px; */
  }
  ul{
    /* margin: 0px;
    padding: 0px; */
  }
  body{
    background-color: ${props => props.theme.backgroundColor};
    transition: 0.1s;
    color: ${props => props.theme.textColor};
  }
`;