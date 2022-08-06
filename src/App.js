import HeaderContainer from './components/Header/HeaderContainer';
import AboutContainer from './components/About/AboutContainer';
import SkillsContainer from './components/Skills/SkillsContainer';
import ProjectsContainer from './components/Projects/ProjectsContainer';
import ExperienceContainer from './components/Experience/ExperienceContainer';
import EducationContainer from './components/Education/EducationContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import FooterContainer from './components/Footer/FooterContainer';
import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import * as Style from './Style'
import { lightTheme, darkTheme } from './theme/theme';
import { ruLang, enLang } from './lang/lang';
import { useState } from 'react';
import { GlobalStyle } from './theme/theme';
import { LangContext } from './lang/lang';
import { MenuContext } from './menu/menu';

const App = () => {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("ru");
  const [menu, setMenu] = useState(false);

  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const switchLang = () => {
    lang === "ru" ? setLang("en") : setLang("ru");
  };
  const switchMenu = () => {
    menu === true ? setMenu(false) : setMenu(true);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme} >
      <LangContext.Provider value={[lang === "ru" ? ruLang : enLang, switchLang]}>
        <MenuContext.Provider value={[menu === true ? true : false, switchMenu]}>
          <GlobalStyle ></GlobalStyle>
          <Style.App>
            <Style.Content>
              <HeaderContainer switchTheme={switchTheme}/>
              <AboutContainer></AboutContainer>
              <SkillsContainer></SkillsContainer>
              <ExperienceContainer></ExperienceContainer>
              <ProjectsContainer></ProjectsContainer>
              <EducationContainer></EducationContainer>
              <FooterContainer></FooterContainer>     
              <NavbarContainer switchTheme={switchTheme}/>
            </Style.Content>
          </Style.App>
        </MenuContext.Provider>
      </LangContext.Provider>
    </ThemeProvider >
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

