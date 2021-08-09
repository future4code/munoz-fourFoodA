import React from 'react';
import ProductCard from '../../Components/RestaurantProducts/ProductCard';
import { useGlobal } from '../../Global/GlobalStateContext';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../Constants/Urls';
import {ContainerCart,
   Delivery,
    ContainerAdress,
    Subtotal,
    Shipping,
    PaymentInfo
   } from './styled'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Typography, Button, RadioGroup, Radio,FormControlLabel } from '@material-ui/core';

function CartPage() {
  const { restaurant, cart } = useGlobal()
  const address = useRequestData(`${BASE_URL}/profile/address`)

  let valores = 0
  for (let i = 0; i < cart.length; i++) {
    valores = valores + (cart[i].price * cart[i].quantity)
  }

  return (
    <ContainerCart>
      <Header/>
      <Delivery>
      <p>Endereço de entrega</p>
      <p>{address && address.address.street}, {address && address.address.number} - {address && address.address.neighbourhood}</p>
      </Delivery>

      {cart.length ?
        <ContainerAdress>
          <h4>{restaurant.name}</h4>
          <p>{restaurant.address}</p>
          <p>{restaurant.deliveryTime}</p>

          {cart.map(product => {
            return <ProductCard product={product} />
          })}
        </ContainerAdress>
        : <p>Carrinho Vazio</p>}

        <Shipping>
        <p>Frete R$ {cart.length ? restaurant.shipping : "00"},00</p>
        </Shipping>

      <Subtotal>
        <Typography variant={'body1'} >SUBTOTAL</Typography>
        <Typography variant={'body1'} >R$ {valores},00</Typography>
      </Subtotal>
      <PaymentInfo>
      <p>Forma de pagamento</p>
      </PaymentInfo>
      <RadioGroup value="" aria-label="gender" name="gender1">
      <FormControlLabel value="money" control={<Radio />} label="Dinheiro" />
      <FormControlLabel value="creditcard" control={<Radio />} label="Cartão de Crédito" />
      </RadioGroup>
      {/* <input type={"radio"} name={"payment"}/>
      <label>Dinheiro</label>
      <input type={"radio"} name={"payment"}/>
      <label>Cartão de crédito</label> */}

      <Button
                variant={'contained'}
                color={'primary'}>Confirmar</Button>
      <Footer/>
    </ContainerCart>
  );
}

export default CartPage;