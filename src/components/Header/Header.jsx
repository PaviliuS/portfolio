import * as Style from './Style';
import { VscMenu,VscSymbolColor } from "react-icons/vsc";
import { useContext } from 'react';
import { LangContext } from '../../lang/lang';
import { MenuContext } from '../../menu/menu';
import Button from './Button/Button';

const Header = (props) => {
    let [lang, setLang] = useContext(LangContext);
    let setMenu = useContext(MenuContext)[1];

    return (
        <Style.Header id='header'>
            <Style.Content>
                <Style.Logo>
                    <Style.Name>{lang.headerName}</Style.Name>
                </Style.Logo>

                <Style.Buttons3>
                    <Button name={<VscMenu />} action={setMenu}/>
                    <Button name={<VscSymbolColor />} action={props.switchTheme} />
                    <Button name={lang.lang} action={setLang} />
                </Style.Buttons3>

                <Style.Buttons>
                    <Button name={<VscMenu />} action={setMenu}/>
                </Style.Buttons>
            </Style.Content>
        </Style.Header>
    );
}
export default Header; 