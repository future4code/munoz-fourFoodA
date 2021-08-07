import React from "react";
import { TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { Button } from "@material-ui/core";
import { SignUpFormContainer, InputsContainer } from "./styled"
import { cpfRequired } from "../../Components/Cpf/Cpf";
import axios from "axios"
import {BASE_URL} from "../../Constants/Urls"
import { signUp } from "../../Services/User";


const SignUpForm = () => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({ name: "", email: "", password: "", cpf: ""})

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, history)
    }
  
    return (
        <form onSubmit={onSubmitForm}>
            <SignUpFormContainer>
                <InputsContainer>
                <TextField
                value={form.name}
                name={"name"}
                onChange={onChange}
                label={"Nome"}
                variant={"outlined"}
                fullWidth
                required
                autoFocus
                margin={"normal"}
                />
                <TextField
                value={form.email}
                name={"email"}
                onChange={onChange}
                label={"E-mail"}
                variant={"outlined"}
                type={"email"}
                fullWidth
                required
                autoFocus
                margin={"normal"}
                />
                <TextField
                value={form.cpf}
                name={"cpf"}
                onChange={onChange}
                label={"CPF"}
                variant={"outlined"}
                placeholder={"000.000.000-00"}
                type={"cpf"}
                fullWidth
                required
                pattern={"^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}"}
                autoFocus
                margin={"normal"}
                />
                <TextField
                value={form.password}
                name={"password"}
                onChange={onChange}
                label={"Senha"}
                variant={"outlined"}
                type={"password"}
                fullWidth
                required
                autoFocus
                margin={"normal"}
                />
                </InputsContainer>
                <Button
                color={"primary"}
                variant={"contained"}
                type={"submit"}
                fullWidth
                >
                    Fazer Cadastro
                </Button>
            </SignUpFormContainer>
        </form>
    )
}

export default SignUpForm;