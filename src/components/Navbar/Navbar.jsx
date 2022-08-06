import * as Style from './Style';
import { VscClose, VscSymbolColor, VscMortarBoard ,VscSymbolProperty,VscFile} from "react-icons/vsc";
import { SiMaildotru, SiWhatsapp, SiTelegram, SiGithub,SiVk } from "react-icons/si";
import {AiOutlineExperiment,AiOutlineProject} from "react-icons/ai";
import { useContext } from 'react';
import { LangContext } from '../../lang/lang';
import { MenuContext } from '../../menu/menu';
import Button from './Button/Button';
import Link from './Link/Link';
import Contact from './Contact/Contact';

const Navbar = (props) => {
    let [lang, setLang] = useContext(LangContext);
    let [menu, setMenu] = useContext(MenuContext);

    return (
        <Style.Navbar menu={menu} id='navbar'>
            <Style.Content>
                <Style.Logo>
                    <Style.Image src={lang.mainPhoto}></Style.Image>
                    <Style.Name>{lang.navbarName}</Style.Name>
                    <Style.About>{lang.navbarWork}</Style.About>
                    <Style.About>{lang.navbarLocation}</Style.About>
                </Style.Logo>

                <Style.Links>
                    <Style.LinksTitle >{lang.about}</Style.LinksTitle>
                    <Link icon={<VscSymbolProperty />} name={lang.skills} link={'#skills'} />
                    <Link icon={<AiOutlineExperiment />} name={lang.experience} link={'#experience'} />
                    <Link icon={<AiOutlineProject/>} name={lang.projects} link={'#projects'} />
                    <Link icon={<VscMortarBoard />} name={lang.education} link={'#education'} />
                  
                  
                </Style.Links>

                <Style.Contacts>
                    <Style.ContactsTitle >{lang.contacts}</Style.ContactsTitle>
                    <Contact color={'#6e5494'} icon={<SiGithub />} name={'github.com/PaviliuS'} link='https://github.com/PaviliuS' />
                    <Contact color={'#45668e'} icon={<SiVk />} name={'vk.com/pavilius'} link='https://vk.com/pavilius' />
                    <Contact color={'#168de2'} icon={<SiMaildotru />} name={'12072000@mail.ru'} link='#footer' />
                    <Contact color={'#25d366'} icon={<SiWhatsapp />} name={'+7(965)394-16-77'} link='#footer' />
                    <Contact color={'#0088cc'} icon={<SiTelegram />} name={'+7(965)394-16-77'} link='#footer' />
                    <Contact color={'#ff0000'} icon={<VscFile />} name={'Resume'} link={lang.footerResume} />

                </Style.Contacts>

                <Style.Buttons>
                    <Button name={<VscClose />} action={setMenu} />
                    <Button name={<VscSymbolColor />} action={props.switchTheme} />
                    <Button name={lang.lang} action={setLang} />
                </Style.Buttons>
            </Style.Content>
        </Style.Navbar>
    );
}
export default Navbar; 