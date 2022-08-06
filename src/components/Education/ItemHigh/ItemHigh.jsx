import * as Style from './Style';

const ItemHigh = (props) => {
    return (
        <Style.Item>
            <Style.Image>
                <Style.Img src={props.imgLink}></Style.Img>
            </Style.Image>
            <Style.Data>
                <Style.Company>
                    {props.company}
                </Style.Company>

                <Style.CompanyAbout>
                    {props.companyAbout}
                </Style.CompanyAbout>
                
                <Style.Period>
                    {props.period}
                </Style.Period>
            </Style.Data>
        </Style.Item>
    );
}

export default ItemHigh; 