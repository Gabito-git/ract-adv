// Se importan los estilos como módulos, como si fuera un objeto
// Para esto, el archivo debe incluir el . module
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext, ReactElement} from 'react';
import { OnChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces';
import React from 'react';

export interface Props{
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties | undefined;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({
    children, 
    product, 
    className, 
    style, 
    onChange,
    value}: Props) => {

    const { counter, increaseBy } = useProduct( { onChange, product, value } );


    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>

            <div className={`${styles.productCard} ${ className } `} style={style}>
                {  children }                   
            </div>
        </Provider>
    )
}
