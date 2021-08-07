import React from 'react';
import { ProfileEditForm } from './ProfileEditForm'
import useRequestData from '../../../hooks/useRequestData'
import { ScreenContainer, InputsContainer } from './styled'

function ProfileEditPage () {
  const userData = useRequestData(`profile`, "user")

  return (
    <ScreenContainer>
      <h1>ProfileEditPage</h1>
      
      <InputsContainer>
        {userData ? <ProfileEditForm userData={userData}/> : <h1>Carregando</h1>}
      </InputsContainer>
    </ScreenContainer>
  );
}

export default ProfileEditPage;