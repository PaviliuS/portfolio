import * as Style from './Style';
import ItemHigh from './ItemHigh/ItemHigh';
import ItemCourse from './ItemCourse/ItemCourse';
import { useContext } from 'react';
import { LangContext } from '../../lang/lang';

const Education = (props) => {
    let [lang] = useContext(LangContext);

    return (
        <Style.Education id='education'>
            <Style.Content>
                <Style.ContentTitle>
                    <Style.Title>
                        {lang.educationTitle}
                    </Style.Title>
                </Style.ContentTitle>
                <Style.List>
                    <Style.ListHigh>
                        <ItemHigh
                            imgLink={lang.educationUniversity1Image}
                            company={lang.educationUniversity1Title}
                            companyAbout={lang.educationUniversity1Direction}
                            period={lang.educationUniversity1Rank}
                        />
                        <ItemHigh
                            imgLink={lang.educationUniversity2Image}
                            company={lang.educationUniversity2Title}
                            companyAbout={lang.educationUniversity2Direction}
                            period={lang.educationUniversity2Rank}
                        />
                    </Style.ListHigh>
                    <Style.Spacer>
                        {lang.educationSpacer}
                    </Style.Spacer>
                    <Style.ListCourse>
                        <ItemCourse
                            company={lang.educationCourse1Title}
                            companyAbout={lang.educationCourse1Author}
                        />
                        <ItemCourse
                            company={lang.educationCourse2Title}
                            companyAbout={lang.educationCourse2Author}
                        />
                        <ItemCourse
                            company={lang.educationCourse3Title}
                            companyAbout={lang.educationCourse3Author}
                        />
                        <ItemCourse
                            company={lang.educationCourse4Title}
                            companyAbout={lang.educationCourse4Author}
                        />
                    </Style.ListCourse>
                </Style.List>
            </Style.Content>
        </Style.Education>
    );
}

export default Education; 