import React from 'react';
import logoinvert3x from "../../assets/logo-invert@3x.png"
import LoginForm from './LoginForm';
import {InputsContainer, ScreenContainer, SignUpButtonContainer, LogoImage} from "./styled"
import { Button } from "@material-ui/core"
import {goToSignUp} from "../../Routes/Coordinator"
import { useHistory } from "react-router-dom";

function LoginPage () {
  const history = useHistory()
  return (
    <ScreenContainer>
      <LogoImage src={logoinvert3x}/>
      <InputsContainer>
      <LoginForm/>
      </InputsContainer>
      <SignUpButtonContainer>
            <Button
            onClick={() => goToSignUp(history)}
            type={"submit"}
             fullWidth
             variant={"text"}
             color={"primary"}
             margin={"normal"}
            >Não possui conta? Cadastre-se</Button>
            </SignUpButtonContainer>
    </ScreenContainer>
  );
}

export default LoginPage;