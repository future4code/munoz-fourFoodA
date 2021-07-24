import React from 'react';
import logoinvert3x from "../../assets/logo-invert@3x.png"
import LoginForm from './LoginForm';
import {InputsContainer, ScreenContainer} from "./styled"

function LoginPage () {
  return (
    <ScreenContainer>
      <img src={logoinvert3x}/>
      <InputsContainer>
      <LoginForm/>
      </InputsContainer>
    </ScreenContainer>
  );
}

export default LoginPage;