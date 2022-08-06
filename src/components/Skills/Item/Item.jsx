import * as Style from './Style';

const Item = (props) => {
    return (
        <Style.Item>
            <Style.Content>
                <Style.ContentIcon color1={props.color1} color2={props.color2}>
                    <Style.Icon>{props.icon}</Style.Icon>
                </Style.ContentIcon>
                <Style.Name>{props.name}</Style.Name>
            </Style.Content>
        </Style.Item>
    );
}

export default Item; 