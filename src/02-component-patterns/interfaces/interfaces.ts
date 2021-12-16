import { Props as ProductButtonProps } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps} from "../components/ProductTitle";


export interface Product{
    id: string;
    title: string;
    img? : string;
}

export interface ProductContextProps{
    counter: number;
    increaseBy: (value:number) => void;
    product: Product;
    maxCount?: number;
}

export interface ProductCardHOCProps{
    ( props: ProductCardProps ): JSX.Element;
    Title:   (props: ProductTitleProps) => JSX.Element;
    Image:   (props: ProductImageProps) => JSX.Element;
    Buttons: (props: ProductButtonProps) => JSX.Element;
}

export interface OnChangeArgs{
    product: Product;
    counter: number;
}

export interface ProductInCart extends Product{
    counter: number;  
}

export interface InitialValues{
    count?: number;
    maxCount?: number;
}

export interface ProductCartHandlers{
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number
    product: Product;

    increaseBy: ( value: number ) => void;
    reset: () => void;
}