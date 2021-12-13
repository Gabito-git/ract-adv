import { useState, useEffect, useRef } from 'react';
import { OnChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs{
    product: Product;
    onChange?: ( args: OnChangeArgs ) => void;
    value?: number;
}

export const useProduct = ( { onChange, product, value = 0 }: useProductArgs)  => {

   const [counter, setCounter] = useState(value);

   const isControlled = useRef( !!onChange );      // Si existe el onChange, quiere decir que está siendo controlado
 

    useEffect(() => {
        setCounter( value );
    }, [value])

   const increaseBy =  ( value: number ) => {        

        if( isControlled.current ){                // Si está controlado, devuelve 1 o -1 que es lo que le llega por value
            return onChange!( { counter: value, product } );
        }

        const newValue = Math.max(counter + value, 0);

        setCounter( newValue );
        onChange  &&  onChange({counter: newValue, product});
   }

   return {
       counter,
       increaseBy
   }
}
