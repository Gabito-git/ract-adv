import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css';
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";


export const ShoppingPage = () => {
 
    const { shoppingCart, onProductCountChange  } = useShoppingCart();           
    
    return (
        <div >
            <h1>Shopping Store</h1>
            <hr />
            
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>

                {
                    products.map( product => 
                        (
                            
                                <ProductCard 
                                    product={ product } 
                                    className="bg-dark text-white"
                                    key={ product.id }
                                    onChange={onProductCountChange }
                                    value={ shoppingCart[product.id]?.counter || 0 }
                                >
                                    <ProductImage className="custom-image" />
                                    <ProductTitle />
                                    <ProductButtons className="custom-buttons"/>
                                </ProductCard>

                        )  
                     )
                }                   
            </div>

            <div className="shopping-cart">

                {
                    Object.values( shoppingCart ).map( product => (
                        <ProductCard 
                            product={ product } 
                            className="bg-dark text-white"
                            style={{ width: '100px' }}
                            key={ product.id }
                            onChange={onProductCountChange }
                            value={ product.counter }
                        >
                            <ProductImage className="custom-image" />
                            <ProductButtons className="custom-buttons"/>
                        </ProductCard >           

                    ))
                }
                

            </div>
          
        </div>
    )
}
