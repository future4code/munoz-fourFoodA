import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToSearch } from '../../Routes/Coordinator'
import { ContainerSearch, SearchInput } from './styled'
import SearchIcon from '@material-ui/icons/Search'
import { InputAdornment, Typography, Box, TextField, Container } from '@material-ui/core';

export default function SearchComponent() {
    const history = useHistory();
    return (
        <ContainerSearch>
            <Box ml={2} mr={2}>
            <form variant="outlined" onClick={() => goToSearch(history)} >
                <SearchInput>
                <TextField
                    autoFocus
                    fullWidth
                    margin="normal"
                    placeholder="Busca"
                    id="input-searchpage"
                    variant="outlined"
                    color="primaryColory"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon color="baseColor" />
                            </InputAdornment>
                        ),
                    }}
                />
                </SearchInput>
            </form>
        </Box>
        </ContainerSearch>
    )
}
