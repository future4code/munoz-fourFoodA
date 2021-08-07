import React from "react"
import {  InputsContainer, LoginFormContainer } from "./styled";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import useForm from "../../hooks/useForm"
import axios from "axios"
import {BASE_URL} from "../../Constants/Urls"
import { goToFeed } from "../../Routes/Coordinator";
import { login } from "../../Services/User";

function LoginForm () {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const history = useHistory()

    const onSubmitForm = (event) =>{
      event.preventDefault()
      login(form, clear, history)
    }

    return (
      <LoginFormContainer>
          <form onSubmit={onSubmitForm}>
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
          // onClick={() => goToFeed(history)}
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