import React from "react";
import { TextField } from "@material-ui/core";
import useForm from "../../../hooks/useForm";
import { Button } from "@material-ui/core";
import { ProfileEditFormContainer, InputsContainer } from "./styled";
import axios from "axios";
import { BASE_URL } from "../../../Constants/Urls"

export const ProfileEditForm = (props) => {
    const [form, onChange, clear] = useForm({ name: props.userData.name, email: props.userData.email, cpf: props.userData.cpf })

    const editProfile = (e) => {
        e.preventDefault()
        axios.put(
            `${BASE_URL}/fourFoodA/profile`,
            form,
            {
                headers: {
                  auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Imlkand4bEtLNDY3YlAyY0g4emFhIiwibmFtZSI6IkpvYW5hIiwiZW1haWwiOiJqb2FuYUBnbWFpbC5jb20iLCJjcGYiOiI3MjY1MjU2MTA3MyIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJBY2Vzc28gVWlyYXB1cnUgZG8gU2VydMOjbywgMjM2LCA3YiAtIENlbnRybyIsImlhdCI6MTYyODA0MTUyNn0.KJDc0EHnXIqTJ3KFVe5wH6P9zV5_dApZOsiatUGvk0k"
                }
              }
            )
            .then((res) => {
                console.log(res)
                window.location.reload()
            })
            .catch((err) => console.log(err))
    }

    return (
    
        <form onSubmit={editProfile}>
            <ProfileEditFormContainer>
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
                </InputsContainer>
                <Button
                    color={"primary"}
                    variant={"contained"}
                    type={"submit"}
                    fullWidth
                >
                    Salvar
                </Button>
            </ProfileEditFormContainer>
        </form>
    )
};