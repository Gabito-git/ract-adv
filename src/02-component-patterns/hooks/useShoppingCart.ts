import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{[key: string]: ProductInCart}>({});

    // Acá, counter va a ser +1 o -1 según la lógica implementada en useProduct. Ya que, al ser pasada está función
    // en el productCard, quiere decir que onChange existe, y asi, la tarjeta va a poder ser controlada desde afuera
    // LA IDEA GENERAL ES QUE DE ESTAR CONTROLADA LA TARJETA, SU ESTADO CAMBIE SOLO ACÁ Y NO EN EL HOOK
    const onProductCountChange =({counter, product}: {counter: number, product: Product}) => {
        
        setShoppingCart( oldShoppingCart => {            

            // Acá si el producto existe en el carrito al ser llamada esta función ( lo cual se hace el presionar los botones de
            // la tarjeta), este producto será asignado a productInCard, de no existir, se le asigna el producto recibido con contador
            // igual a cero
            const productInCart: ProductInCart = oldShoppingCart[product.id] || {...product, counter: 0};

            // Si al sumarle el contador, el nuevo contador es mayor que cero
            if( Math.max( productInCart.counter + counter , 0 ) > 0 ){
                productInCart.counter += counter;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart

                }
            }

            // De lo contrario, borra el producto
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return rest;

            // // Elimina el objeto del carrito si el counter es igual a cero
            // if( counter === 0 ){
            //     const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            //     return rest;
            // }

            // return {
            //     ...oldShoppingCart,
            //     [product.id]: { ...product, counter }
            // }

        } )
    }

    return {
        shoppingCart, 
        onProductCountChange
    }
}
 