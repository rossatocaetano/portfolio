import style from './BusinessCard.module.scss';
import {IBusinessCard} from '../../types/menu';

const BusinessCard = (props:IBusinessCard) => {
    const verticalParameter: boolean = props.vertical;

    const vertical = (verticalParameter: boolean) => {
        if (verticalParameter) {
            return [style.businesscard, style.businesscardVertical].join(' ');
        } else {
            return style.businesscard;
        }};

    return (    
            <div className={ vertical(verticalParameter) }>
                <img className={style.image} alt='logo' src={props.image} />
                
                <ul className={style.information}>
                    {props.items.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })}                    
                </ul>
            </div>            
        
    )
}

export default BusinessCard;

