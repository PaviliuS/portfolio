import * as Style from './Style';
import Item from './Item/Item';
import { SiRedux, SiStyledcomponents, SiHtml5, SiBootstrap, SiMaterialui, SiGithub, SiReact, SiCss3, SiJavascript } from 'react-icons/si';
import {TbApi}from'react-icons/tb';
import {VscDeviceMobile} from 'react-icons/vsc';
import {FaSyncAlt} from 'react-icons/fa';
import { useState, useContext } from 'react';
import { LangContext } from '../../lang/lang';

const Skills = (props) => {
    let [lang] = useContext(LangContext);

    let [list, setList1] = useState(false);
    let onClickSetList = () => {
        list === true ? setList1(false) : setList1(true);
    }

    return (
        <Style.Skills id='skills'>
            <Style.Content>
                <Style.ContentTitle>
                    <Style.Title>
                        {lang.skillsTitle}
                    </Style.Title>
                </Style.ContentTitle>


                <Style.Text>
                    {lang.skillsText}
                </Style.Text>

                <Style.List>
                    <Item color1={'#00c6ff'} color2={'#0072ff'} icon={<SiReact />} name={'React'}></Item>
                    <Item color1={'#8E2DE2'} color2={'#4A00E0'} icon={<SiRedux />} name={'Redux'}></Item>
                    <Item color1={'#fc4a1a'} color2={'#f7b733'} icon={<SiJavascript />} name={'JavaScript'}></Item>
                    {list && <Item color1={'#FC5C7D'} color2={'#6A82FB'} icon={<SiBootstrap />} name={'Bootstrap'}></Item>}
                    {list && <Item color1={'#6A82FB'} color2={'#3F5EFB'} icon={<SiMaterialui />} name={'MaterialUI'}></Item>}
                    {list && <Item color1={'#7F00FF'} color2={'#E100FF'} icon={<SiGithub />} name={'Git'}></Item>}
                    {list && <Item color1={'#0575E6'} color2={'#021B79'} icon={<SiCss3 />} name={'CSS'}></Item>}
                    {list && <Item color1={'#6190E8'} color2={'#A7BFE8'} icon={<SiHtml5 />} name={'HTML'}></Item>}
                    {list && <Item color1={'#4568DC'} color2={'#B06AB3'} icon={<SiStyledcomponents />} name={'StyledComponents'}></Item>}
                    {list && <Item color1={'#20002c'} color2={'#cbb4d4'} icon={<TbApi />} name={'REST API'}></Item>}
                    {list && <Item color1={'#4DA0B0'} color2={'#D39D38'} icon={<VscDeviceMobile />} name={'Responsive'}></Item>}
                    {list && <Item color1={'#7b4397'} color2={'#dc2430'} icon={<FaSyncAlt />} name={'Async'}></Item>}
                </Style.List>
                <Style.ContentButton>
                    <Style.Button onClick={() => onClickSetList()}>
                        {list === false ? lang.skillsButtonOn : lang.skillsButtonOff}
                    </Style.Button>
                </Style.ContentButton>
            </Style.Content>

        </Style.Skills>
    );
}

export default Skills; 