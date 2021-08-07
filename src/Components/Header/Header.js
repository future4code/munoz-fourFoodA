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
       } else if (history.location.pathname = "/restaurante"){
           return("Restaurante")
       } else if (history.location.pathname === "/profile"){
        return("Meu Perfil")
    }   else if(history.location.pathname === "/editAddressPage" || "/cadastrar-endereco"){
        return("Endereço")
    }  
    else if(history.location.pathname === "/cart"){
        return("Meu Carrinho")
    }  else if(history.location.pathname === "/search"){
        return("Busca")
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