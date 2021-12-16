// Se importan los estilos como módulos, como si fuera un objeto
// Para esto, el archivo debe incluir el . module
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { InitialValues, OnChangeArgs, Product, ProductContextProps, ProductCartHandlers } from '../interfaces/interfaces';
import React from 'react';

export interface Props{
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: (args: ProductCartHandlers) => JSX.Element;
    className?: string;
    style?: React.CSSProperties | undefined;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({
    children, 
    product, 
    className, 
    style, 
    onChange,
    value,
    initialValues}: Props) => {

    const { counter, increaseBy, isMaxCountReached, reset } = useProduct( { onChange, product, value, initialValues } );
    
    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount: initialValues?.maxCount            
        }}>

            <div className={`${styles.productCard} ${ className } `} style={style}>
                {  
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount: initialValues?.maxCount,
                        product,
                        increaseBy,
                        reset
                    }) 
                }                   
            </div>
        </Provider>
    )
}
