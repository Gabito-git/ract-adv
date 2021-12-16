import { useState, useEffect, useRef } from 'react';
import { OnChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface useProductArgs{
    product: Product;
    onChange?: ( args: OnChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues
}

export const useProduct = ( { onChange, product, value = 0, initialValues }: useProductArgs)  => {

    const [counter, setCounter] = useState(initialValues?.count || value);
    const isMounted = useRef(false);   

    // Inicialmente se ejecuta el hook y se establece el initialvalues.count (si lo hay), pero, al finalizar su código, se va a ejecutar
    // el efecto en el que se encuenta el setCounter lo que va a establecer el counter al valor de value. Para evitar esto, se usa el useref 
    // De esta manera, al ejecutarse ese efecto, va a ver que isMounted está en falso y no va a cambiar el valor que ya se habia establecido
    // con initialvalues.count, seguidamente, se ejecutará el segundo efecto habilitando el primer efecto en caso de que haya un cambio en value
    // Todo esto, evita una segunda renderización del código, pues al cambiar el valor del ref no produce re rendersaz

    useEffect(() => {
        if(!isMounted.current) return;
        setCounter( value );
    }, [value])

    useEffect(() => {
        isMounted.current  = true;
    }, [])


   const increaseBy =  ( value: number ) => {  
       
        const maxValue = initialValues?.maxCount || Infinity;

        const newValue = Math.max(counter + value, 0);

        setCounter( Math.min( newValue, maxValue ));
        onChange  &&  onChange({counter: newValue, product});
   }

   const reset = () => {
       setCounter( initialValues?.count || value )
   }

   return {
       counter,
       increaseBy,
       isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
       reset
   }
}
