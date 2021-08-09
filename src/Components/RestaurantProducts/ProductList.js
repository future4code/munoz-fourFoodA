import React, { useEffect } from 'react';
import ProductCard from './ProductCard'

function ProductList(props) {
    const categories = []
    let category

        for (let product of props.products) {
            if (product.category !== category) {
                category = product.category
                categories.push(category)

            }
        }
        const categoriesFiltered = categories.filter((category, index) => {
            return categories.indexOf(category) === index
        })
  
        const mapPerCategory = (category) => {
            const perCategory = props.products.map(product => {
                if (product.category === category) {
                    return <ProductCard product={product}/>
                }
            })

            return perCategory
        }

    return (
        <div>
            {categoriesFiltered.map(category => {
                return (
                    <div key={category}>
                        <h3>{category}</h3>
                        {mapPerCategory(category)}
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList