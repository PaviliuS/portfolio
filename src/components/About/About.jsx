import { useContext } from 'react';
import { LangContext } from '../../lang/lang';
import * as Style from './Style';

const About = (props) => {
    let [lang] = useContext(LangContext);
    return (
        <Style.About id='about'>
            <Style.Content>
                <Style.ContentTitle>
                    <Style.Title>
                        {lang.aboutTitle}
                    </Style.Title>
                </Style.ContentTitle>
                <Style.ContentData>
                    <Style.Data>
                        <Style.Name>
                            {lang.aboutName}
                        </Style.Name>

                        <Style.NameAnimation>
                            FrontEnd Developer
                        </Style.NameAnimation>

                        <Style.Text>
                            {lang.aboutText}
                        </Style.Text>
                    </Style.Data>
                    <Style.Image>
                        <Style.Img src={lang.mainPhoto}></Style.Img>
                    </Style.Image>
                </Style.ContentData>
            </Style.Content>
        </Style.About>
    );
}

export default About; 