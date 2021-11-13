
export const LazyPage1 = () => {
    return (
        <h1> LazyPage1 </h1>
    )
}

export default LazyPage1       // Asi lo requiere el lazyload, se mantiene la exportación de arriba por que ya se tiene importado
                                // así en el index
