import React from 'react';
import { useHistory } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import OrdersHistory from '../../Components/Cpf/OrdersHistory';
import { goToProfileEdit } from '../../Routes/Coordinator';
import { goToAddressEdit } from '../../Routes/Coordinator';

function ProfilePage () {
    const history = useHistory()
    const userData = useRequestData(`profile`, "user")
    const address = useRequestData(`profile/address`, "address")

  return (
    <div>
      <h1>ProfilePage</h1>

      <div>
        <p>{userData && userData.name}</p>
        <p>{userData && userData.email}</p>
        <p>{userData && userData.cpf}</p>
        <button onClick={() => goToProfileEdit(history)}>Editar perfil</button>
      </div>

      <div>
        <p>{address && address.street}, {address && address.number} - {address && address.neighbourhood}</p>
        <button onClick={() => goToAddressEdit(history)}>Editar endereço</button>
      </div>

      <OrdersHistory />
    </div>
  );
}

export default ProfilePage;