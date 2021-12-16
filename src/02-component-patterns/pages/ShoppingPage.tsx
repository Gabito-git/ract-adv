import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css';
import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {  
    
    return (
        <div >
            <h1>Shopping Store</h1>
            <hr />
            
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            
                <ProductCard 
                    product={ product } 
                    className="bg-dark text-white"
                    key={ product.id }    
                    initialValues={{
                        count: 6,
                        maxCount: 10
                    }}             
                >
                    {   // Se expone toda la información que genera el componente
                        ( { reset, increaseBy, isMaxCountReached, count } ) => (
                            <>
                                <ProductImage className="custom-image" />
                                <ProductTitle />
                                <ProductButtons className="custom-buttons"/>
                                <button onClick={reset} >Reset</button>

                                <button onClick={() => increaseBy(-2)}>-2</button>
                                {
                                    !isMaxCountReached && (
                                        <button onClick={() => increaseBy(2)}>+2</button>
                                    )
                                }

                                <span>{ count }</span>
                            </>
                        )
                    }
                    
                </ProductCard>

                           
            </div>            
          
        </div>
    )
}
