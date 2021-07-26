import React from "react"
import {  InputsContainer, LoginFormContainer } from "./styled";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import useForm from "../../Hooks/useForm"

function LoginForm () {
    const [form, onChange] = useForm({ email: "", password: "" })
    const history = useHistory()
    return (
      <LoginFormContainer>
          <form>
          <InputsContainer>
          <TextField
              name={"email"}
              value={form.email}
              onChange={onChange}
              label={"E-mail"}
              variant={"outlined"}
              fullWidth
              margin={"normal"}
              required
              type={"email"}
              />
              <TextField
                  name={"password"}
                  value={form.password}
                  onChange={onChange}
                  label={"Senha"}
                  variant={"outlined"}
                  fullWidth
                  margin={"normal"}
                  required
                  type={"password"}
                />
          </InputsContainer>
          <Button
             type={"submit"}
             fullWidth
             variant={"contained"}
             color={"primary"}
             margin={"normal"}
            >Fazer Login</Button>
          </form>
      </LoginFormContainer>
    );
  }
  
  export default LoginForm;