import * as Style from './Style';

const Item = (props) => {
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

                <Style.Profession>
                    {props.profession}
                </Style.Profession>

                <Style.ProfessionAbout>
                    {props.professionAbout}
                </Style.ProfessionAbout>

                <Style.Period>
                    {props.period}
                </Style.Period>
            </Style.Data>
        </Style.Item>
    );
}

export default Item; 