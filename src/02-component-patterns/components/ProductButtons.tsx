import { useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface Props{
    className?: string;
    style?: React.CSSProperties | undefined    
}

export const ProductButtons = ({ className, style }: Props) => {

    const { increaseBy, counter, maxCount } = useContext(ProductContext);

    const isMaxReached = () => {
        return !!maxCount && counter === maxCount;
    }

    console.log({ maxCount });

    return(
        <div 
            className={ `${styles.buttonsContainer} ${ className }` }
            style = { style }
        >
            <button 
                className={styles.buttonMinus}
                onClick = { () => increaseBy(-1)}
            > - </button>

            <div className={ styles.countLabel }> { counter } </div>

            <button 
                className={`${styles.buttonAdd} ${ isMaxReached() && styles.disabled }`}
                onClick = { () => increaseBy(1)}
            > + </button>
        </div>
    )
}