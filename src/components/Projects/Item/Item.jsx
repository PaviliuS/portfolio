import * as Style from './Style';

const Item = (props) => {
    return (
        <Style.Item color1={props.color1} color2={props.color2}>
            <Style.Content href={props.projectLink}>
                <Style.Card1 color1={props.color1} color2={props.color2}>

                    <Style.Name>{props.name}</Style.Name>
                </Style.Card1>
                <Style.Card2 color1={props.color1} color2={props.color2}>
                    <Style.BackgroundText>
                        {'<div><h1></h1></div>'}
                    </Style.BackgroundText>
                    
                    <Style.Text>
                        {props.textAbout}
                    </Style.Text>


                </Style.Card2>

            </Style.Content>
        </Style.Item>
    );
}

export default Item; 