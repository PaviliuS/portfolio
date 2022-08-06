import * as Style from './Style';
import Item from './Item/Item';
import { useContext, useState } from 'react';
import { LangContext } from '../../lang/lang';

const Projects = (props) => {
    let [lang] = useContext(LangContext);
    let [list, setList] = useState(false);
    let onClickSetList = () => {
        list === true ? setList(false) : setList(true);
    }

    return (
        <Style.Projects id='projects'>
            <Style.Content>
                <Style.ContentTitle>
                    <Style.Title>
                        {lang.projectsTitle}
                    </Style.Title>
                </Style.ContentTitle>


                <Style.Text>
                    {lang.projectsText}
                </Style.Text>

                <Style.List>
                    <Item projectLink={lang.projectsWork1Link} color1={'#00c6ff'} color2={'#0072ff'} name={'./project-1/'} textAbout={lang.projectsWork1Text}></Item>
                    <Item projectLink={lang.projectsWork2Link} color1={'#fc4a1a'} color2={'#f7b733'} name={'./project-2/'} textAbout={lang.projectsWork2Text}></Item>
                    <Item projectLink={lang.projectsWork3Link} color1={'#8E2DE2'} color2={'#4A00E0'} name={'./project-3/'} textAbout={lang.projectsWork3Text}></Item>
                    {list && <Item projectLink={lang.projectsWork4Link} color1={'#7F00FF'} color2={'#E100FF'} name={'./project-4/'} textAbout={lang.projectsWork4Text}></Item>}
                    {list && <Item projectLink={lang.projectsWork5Link} color1={'#0575E6'} color2={'#021B79'} name={'./project-5/'} textAbout={lang.projectsWork5Text}></Item>}
                    {list && <Item projectLink={lang.projectsWork6Link} color1={'#6A82FB'} color2={'#3F5EFB'} name={'./project-6/'} textAbout={lang.projectsWork6Text}></Item>}
                </Style.List>

                <Style.ContentButton>
                    <Style.Button onClick={() => onClickSetList()}>
                        {list === false ? lang.projectsButtonOn : lang.projectsButtonOff}
                    </Style.Button>
                </Style.ContentButton>
            </Style.Content>
        </Style.Projects>
    );
}

export default Projects; 