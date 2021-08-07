import React from 'react';
import axios from "axios";
import useForm from "../../hooks/useForm";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { InputsContainer, AddAdressFormContainer } from './styled'
import {BASE_URL} from "../../Constants/Urls"
import { goToFeed } from '../../Routes/Coordinator';
import { useHistory } from "react-router-dom"


function AdressForm() {
    const history = useHistory()
    const [form, onChange, clear] = useForm({
        street: "",
        number: "",
        neighbourhood: "",
        city: "",
        state: "",
        complement: ""
    })

    const AddAdress = (e) => {
        e.preventDefault()

        axios.put(
            `${BASE_URL}/address`,
            form,
            {
                headers: {
                    auth: localStorage.getItem('token')
                }
            }
        ) .then((response) => {
            clear()
            goToFeed(history)
            localStorage.setItem("token", response.data.user.token)
            console.log(response.data)
        })
        .catch (error => {
            console.log(error)
        })
    }

    return (
        <form onSubmit={AddAdress}>
            <AddAdressFormContainer>
                <InputsContainer>
                    <TextField
                        value={form.street}
                        name={"street"}
                        onChange={onChange}
                        label={"Logradouro"}
                        variant={"outlined"}
                        fullWidth
                        required
                        autoFocus
                        margin={"normal"}
                    />

                    <TextField
                        value={form.number}
                        name={"number"}
                        onChange={onChange}
                        label={"Número"}
                        variant={"outlined"}
                        fullWidth
                        required
                        autoFocus
                        margin={"normal"}
                    />

                    <TextField
                        value={form.complement}
                        name={"complement"}
                        onChange={onChange}
                        label={"Complemento"}
                        variant={"outlined"}
                        fullWidth
                        required
                        autoFocus
                        margin={"normal"}
                    />

                    <TextField
                        value={form.neighbourhood}
                        name={"neighbourhood"}
                        onChange={onChange}
                        label={"Bairro"}
                        variant={"outlined"}
                        fullWidth
                        required
                        autoFocus
                        margin={"normal"}
                    />

                    <TextField
                        value={form.city}
                        name={"city"}
                        onChange={onChange}
                        label={"Cidade"}
                        variant={"outlined"}
                        fullWidth
                        required
                        autoFocus
                        margin={"normal"}
                    />

                    <TextField
                        value={form.state}
                        name={"state"}
                        onChange={onChange}
                        label={"Estado"}
                        variant={"outlined"}
                        fullWidth
                        required
                        autoFocus
                        margin={"normal"}
                    />
                </InputsContainer>

                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                    margin={"normal"}
                >Cadastrar Endereço</Button>
            </AddAdressFormContainer>
        </form>
    );
}

export default AdressForm;