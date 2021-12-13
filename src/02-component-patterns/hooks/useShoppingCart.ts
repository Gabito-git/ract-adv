import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{[key: string]: ProductInCart}>({});

    // Acá, counter va a ser +1 o -1 según la lógica implementada en useProduct. Ya que, al ser pasada está función
    // en el productCard, quiere decir que onChange existe, y asi, la tarjeta va a poder ser controlada desde afuera
    // LA IDEA GENERAL ES QUE DE ESTAR CONTROLADA LA TARJETA, SU ESTADO CAMBIE SOLO ACÁ Y NO EN EL HOOK
    const onProductCountChange =({counter, product}: {counter: number, product: Product}) => {
        
        setShoppingCart( oldShoppingCart => {        

            // Elimina el objeto del carrito si el counter es igual a cero
            if( counter === 0 ){
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                return rest;
            }

            return {
                ...oldShoppingCart,
                [product.id]: { ...product, counter }
            }

        } )
    }

    return {
        shoppingCart, 
        onProductCountChange
    }
}
 