import * as Style from './Style';

const Contact = (props) => {
    return (
        <Style.Contact >
            <Style.Content color={props.color} href={props.link}>
                <Style.Icon>
                    {props.icon}
                </Style.Icon>
                <Style.Name>
                    {props.name}
                </Style.Name>
            </Style.Content>
        </Style.Contact>
    );
}
export default Contact; 