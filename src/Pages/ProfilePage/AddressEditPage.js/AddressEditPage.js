import React from 'react';
import { ScreenContainer, InputsContainer } from './styled'
import useRequestData from '../../../hooks/useRequestData'
import AddressEditForm from './AddressEditForm'
import { BASE_URL } from '../../../Constants/Urls';
import Header from '../../../Components/Header/Header';

function AddressEditPage() {
  const addressData = useRequestData(`${BASE_URL}/profile/address`)
  
  return (
    <ScreenContainer>
      <Header/>

      <InputsContainer>
        {addressData ? <AddressEditForm addressData={addressData} /> : <h1>Carregando</h1>}
      </InputsContainer>
    </ScreenContainer>
  );
}

export default AddressEditPage;
