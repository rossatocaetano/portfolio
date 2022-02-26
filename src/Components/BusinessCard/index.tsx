import style from './BusinessCard.module.scss';
import {IBusinessCard} from '../../types/menu';

const BusinessCard = (props:IBusinessCard) => {

    return (    
        <div className={style.container}>
            <div className={style.businesscard}>
                <img className={style.image} alt='logo' src={props.image} />
                
                <ul className={style.information}>
                    {props.items.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })}                    
                </ul>
            </div>            
        </div>
    )
}

export default BusinessCard;

