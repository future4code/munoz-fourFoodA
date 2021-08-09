import React from 'react';
import { Button, Typography } from "@material-ui/core";
import { useHistory } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import OrdersHistory from '../../Components/OrdersHistory/OrdersHistory';
import { goToProfileEdit } from '../../Routes/Coordinator';
import { goToAddressEdit } from '../../Routes/Coordinator';
import { BASE_URL } from '../../Constants/Urls';
import {ContainerDetail, 
  ContainerAdress,
  ContainerOrderHistory,
  ContainerTitleOrder
} from "./styled"
import Footer from '../../Components/Footer/Footer';
import Header from "../../Components/Header/Header"

function ProfilePage () {
    const history = useHistory()
    const userData = useRequestData(`${BASE_URL}/profile`)
    const address = useRequestData(`${BASE_URL}/profile/address`)

  return (
    <div>
      <Header/>
      <ContainerDetail>
        <div>
        <Typography  variant={"body1"}>{userData && userData.user.name}</Typography>
        <Typography  variant={"body1"}>{userData && userData.user.email}</Typography>
        <Typography  variant={"body1"}>{userData && userData.user.cpf}</Typography>
        </div>
        <Button onClick={() => goToProfileEdit(history)}>Editar perfil</Button>
      </ContainerDetail>
      <ContainerAdress>
      <div>
        <p>{address && address.address.street}, {address && address.address.number} - {address && address.address.neighbourhood}</p>
      </div>
      <Button onClick={() => goToAddressEdit(history)}>Editar endereço</Button>
      </ContainerAdress>
      <ContainerOrderHistory>
        <ContainerTitleOrder>
        <Typography  variant={"body1"}>Histórico de Pedidos</Typography>
        </ContainerTitleOrder>
        <OrdersHistory />
      </ContainerOrderHistory>
      <Footer/>
    </div>
  );
}

export default ProfilePage;