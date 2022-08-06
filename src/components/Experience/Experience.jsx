import * as Style from './Style';
import Item from './Item/Item';
import { useContext } from 'react';
import { LangContext } from '../../lang/lang';

const Experience = (props) => {
    let [lang] = useContext(LangContext);

    return (
        <Style.Experience id='experience'>
            <Style.Content>
                <Style.ContentTitle>
                    <Style.Title>
                        {lang.experienceTitle}
                    </Style.Title>
                </Style.ContentTitle>

                <Style.List>
                    <Item
                        imgLink={lang.experienceWork1Image}
                        company={lang.experienceWork1Company}
                        companyAbout={lang.experienceWork1CompanyAbout}
                        profession={lang.experienceWork1Profession}
                        professionAbout={lang.experienceWork1ProfessionAbout}
                        period={lang.experienceWork1Period}
                    />
                    <Item
                        imgLink={lang.experienceWork2Image}
                        company={lang.experienceWork2Company}
                        companyAbout={lang.experienceWork2CompanyAbout}
                        profession={lang.experienceWork2Profession}
                        professionAbout={lang.experienceWork2ProfessionAbout}
                        period={lang.experienceWork2Period}
                    />
                </Style.List>
            </Style.Content>
        </Style.Experience>
    );
}

export default Experience; 