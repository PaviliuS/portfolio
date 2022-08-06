import * as Style from './Style';

const Link = (props) => {
    return (
        <Style.Link>
            <Style.Content color={props.color} href={props.link}>
                <Style.Icon>
                    {props.icon}
                </Style.Icon>
                <Style.Name>
                    {props.name}
                </Style.Name>
            </Style.Content>
        </Style.Link>
    );
}
export default Link; 