import React from 'react';
import ProductCard from '../../Components/RestaurantProducts/ProductCard';
import { useGlobal } from '../../Global/GlobalStateContext';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../Constants/Urls';

function CartPage() {
  const { restaurant, cart } = useGlobal()
  const address = useRequestData(`${BASE_URL}/profile/address`)

  let valores = 0
  for (let i = 0; i < cart.length; i++) {
    valores = valores + (cart[i].price * cart[i].quantity)
  }

  return (
    <div>
      <p>Endereço de entrega</p>
      <p>{address && address.address.street}, {address && address.address.number} - {address && address.address.neighbourhood}</p>

      {cart.length ?
        <div>
          <h4>{restaurant.name}</h4>
          <p>{restaurant.address}</p>
          <p>{restaurant.deliveryTime}</p>

          {cart.map(product => {
            return <ProductCard product={product} />
          })}
        </div>
        : <p>Carrinho Vazio</p>}

      <p>Frete R$ {cart.length ? restaurant.shipping : "00"},00</p>

      <div>
        <h3>SUBTOTAL</h3>
        <p>R$ {valores},00</p>
      </div>

      <p>Forma de pagamento</p>

      <input type={"radio"} name={"payment"}/>
      <label>Dinheiro</label>
      <input type={"radio"} name={"payment"}/>
      <label>Cartão de crédito</label>

      <button>Confirmar</button>
    </div>
  );
}

export default CartPage;