import React from 'react';

function ProductQuantity(props) {
    const handleSelect = (e) => {
        props.setQuantity(e.target.value)
    }

    return (
        <div>
            <p>Selecione a quantidade desejada</p>
            <select value={props.quantity} onChange={handleSelect}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
            </select>

            <button onClick={props.addToCart}>Adicionar ao carrinho</button>
        </div>
    )
}

export default ProductQuantity