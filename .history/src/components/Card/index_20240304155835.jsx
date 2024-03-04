import { useState } from 'react';
import styles from './Card.module.scss'
export default function Card({imageUrl, title, price, onPlus, onClickFavorite }) {
    const [isAdded, setIsAdded] = useState(false)

    const onClickPlus = () => {
        onPlus({imageUrl, title, price,})
        setIsAdded(!isAdded)
    }
    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src="/img/heart_gray.svg" alt="" />
            </div>

            <img width={133} height={112} src={`${imageUrl}`} alt="" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                    <span>Цена</span>
                    <b> {price}</b>
                </div>
                <img 
                    src={isAdded ? "/img/done_icon.svg" : "/img/plus.svg"} 
                    alt="plus-image" 
                    onClick={onClickPlus}/>
            </div>
        </div>
    );
}
