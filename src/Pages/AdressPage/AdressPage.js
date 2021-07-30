import React from 'react';
import { ScreenContainer, InputsContainer } from './styled'
import AdressForm from './AdressForm'


function AdressPage() {
  return (
    <ScreenContainer>
      <h2>Meu Endereço</h2>
      <InputsContainer>
        <AdressForm></AdressForm>
      </InputsContainer>
    </ScreenContainer>
  );
}

export default AdressPage;
