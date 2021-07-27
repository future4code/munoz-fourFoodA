import React from 'react';
import logoinvert3x from "../../assets/logo-invert@3x.png"
import { LogoImage, ScreenContainer } from "./styled";
import SignUpForm from './SignUpForm';

function SignUpPage () {
  return (
    <ScreenContainer>
      <LogoImage src={logoinvert3x}/>
      <h1>SignUpPage</h1>
      <SignUpForm/>
    </ScreenContainer>
  );
}

export default SignUpPage;