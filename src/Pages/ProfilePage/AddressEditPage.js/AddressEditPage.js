import React from 'react';
import { ScreenContainer, InputsContainer } from './styled'
import useRequestData from '../../../hooks/useRequestData'
import AddressEditForm from './AddressEditForm'

function AddressEditPage() {
  const addressData = useRequestData(`profile/address`, "address")
  
  return (
    <ScreenContainer>
      <h2>Meu Endereço</h2>

      <InputsContainer>
        {addressData ? <AddressEditForm addressData={addressData} /> : <h1>Carregando</h1>}
      </InputsContainer>
    </ScreenContainer>
  );
}

export default AddressEditPage;
