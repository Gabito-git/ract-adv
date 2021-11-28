import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div >
            <h1>Shopping Store</h1>
            <hr />
            
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>

                <ProductCard product={ product } className="bg-dark text-white">
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title /> 
                    <ProductCard.Buttons className="custom-buttons"/>
                </ProductCard>

                <ProductCard product={ product } className="bg-dark text-white">
                    <ProductImage className="custom-image" />
                    <ProductTitle />
                    <ProductButtons className="custom-buttons"/>
                </ProductCard>

                <ProductCard 
                    product={ product } 
                    style={{
                        backgroundColor: '#70d1f8'
                    }}
                >
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons style={{
                        display: 'flex',
                        justifyContent: 'end'
                    }} />
                </ProductCard>
            </div>
        </div>
    )
}
