// Se importan los estilos como módulos, como si fuera un objeto
// Para esto, el archivo debe incluir el . module
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext, ReactElement} from 'react';
import { Product, ProductContextProps } from '../interfaces/interfaces';

export interface Props{
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties | undefined
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({children, product, className, style}: Props) => {

    const { counter, increaseBy } = useProduct();

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

