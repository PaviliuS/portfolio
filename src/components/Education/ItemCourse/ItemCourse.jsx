import * as Style from './Style';

const ItemCourse = (props) => {
    return (
        <Style.ItemCourse>
            <Style.Data>
                <Style.Name>
                    {props.company}
                </Style.Name>
                
                <Style.Author>
                    {props.companyAbout}
                </Style.Author>
            </Style.Data>
        </Style.ItemCourse>
    );
}

export default ItemCourse; 