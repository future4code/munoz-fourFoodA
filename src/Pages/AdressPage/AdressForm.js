import React from 'react';
import axios from "axios";
import useForm from "../../hooks/useForm";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { InputsContainer, AddAdressFormContainer } from './styled'
import {BASE_URL} from "../../Constants/Urls"


function AdressForm() {
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
                    auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Imlkand4bEtLNDY3YlAyY0g4emFhIiwibmFtZSI6IkpvYW5hIiwiZW1haWwiOiJqb2FuYUBnbWFpbC5jb20iLCJjcGYiOiI3MjY1MjU2MTA3MyIsImhhc0FkZHJlc3MiOmZhbHNlLCJpYXQiOjE2Mjc2MDMxMjF9.XtBIYgrQIgdURHE9u-hXesT0RgvKa2NkMrUYgXVNX0o"
                }
            }
        ) .then((r) => {
            clear()
            console.log(r.data)
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