import * as Style from './Style';
import Contact from './Contact/Contact';

import { VscFile } from 'react-icons/vsc';
import { SiMaildotru, SiWhatsapp, SiTelegram, SiGithub, SiVk } from "react-icons/si";
import { LangContext } from '../../lang/lang';
import { useContext } from 'react';

const Footer = (props) => {
    let [lang] = useContext(LangContext);
    return (
        <Style.Footer id='footer'>
            <Style.Notice href={lang.footerResume}> {lang.footerLearnMore} </Style.Notice>
            <Style.Content>
                <Style.Contacts>
                    <Style.ContactsTitle >{lang.contacts}</Style.ContactsTitle>
                    <Contact color={'#6e5494'} icon={<SiGithub />} name={'github.com/PaviliuS'} link='https://github.com/PaviliuS' />
                    <Contact color={'#45668e'} icon={<SiVk />} name={'vk.com/pavilius'} link='https://vk.com/pavilius' />
                    <Contact color={'#168de2'} icon={<SiMaildotru />} name={'12072000@mail.ru'} link='#footer' />
                    <Contact color={'#25d366'} icon={<SiWhatsapp />} name={'+7(965)394-16-77'} link='#footer' />
                    <Contact color={'#0088cc'} icon={<SiTelegram />} name={'+7(965)394-16-77'} link='#footer' />
                    <Contact color={'#ff0000'} icon={<VscFile />} name={'Resume'} link={lang.footerResume} />
                </Style.Contacts>
                <Style.Title>
                    {lang.footerCreatedBy}
                </Style.Title>
            </Style.Content>
        </Style.Footer>
    );
}

export default Footer;

