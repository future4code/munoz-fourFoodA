import React from 'react';
import { HeaderContainer } from './styled';
import { useHistory } from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Header = () =>{
    const history = useHistory()

    const handleGoBack = () =>{
        history.goBack()
    }
const Name =() => {
   if (history.location.pathname === "/feed"){
           return("IFuture")
       } else if (history.location.pathname === "/perfil"){
        return("Perfil")
    }   else if(history.location.pathname === "/editar-perfil"){
        return("Editar Perfil")
    }   else if (history.location.pathname === "/editar-endereco"){
        return("Editar Endereço")
    } else if(history.location.pathname === "/carrinho"){
        return("Meu Carrinho")
    }  else if(history.location.pathname === "/procurar"){
        return("Busca")
    }  else if (history.location.pathname = "/restaurant/:id"){
        return("Restaurante")
    }
    else{
       return("")
   }
}

    return(
        <HeaderContainer>
        {history.location.pathname === "/restaurant" ? <div className={"zero"}></div>:<ArrowBackIosIcon onClick={handleGoBack} className={"Back"}/>}
            <div className={"title"}>{Name()}</div>
            </HeaderContainer>
    )
}
export default Header