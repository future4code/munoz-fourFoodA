import React from 'react';
import { ProfileEditForm } from './ProfileEditForm'
import useRequestData from '../../../hooks/useRequestData'
import { ScreenContainer, InputsContainer } from './styled'
import { BASE_URL } from '../../../Constants/Urls';
import Header from '../../../Components/Header/Header';

function ProfileEditPage () {
  const userData = useRequestData(`${BASE_URL}/profile`)

  return (
    <ScreenContainer>
      <Header/>
      
      <InputsContainer>
        {userData ? <ProfileEditForm userData={userData}/> : <h1>Carregando</h1>}
      </InputsContainer>
    </ScreenContainer>
  );
}

export default ProfileEditPage;