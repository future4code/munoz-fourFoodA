import React from 'react';
import { useHistory } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import OrdersHistory from '../../Components/OrdersHistory/OrdersHistory';
import { goToProfileEdit } from '../../Routes/Coordinator';
import { goToAddressEdit } from '../../Routes/Coordinator';
import { BASE_URL } from '../../Constants/Urls';

function ProfilePage () {
    const history = useHistory()
    const userData = useRequestData(`${BASE_URL}/profile`)
    const address = useRequestData(`${BASE_URL}/profile/address`)

  return (
    <div>
      <h1>ProfilePage</h1>

      <div>
        <p>{userData && userData.user.name}</p>
        <p>{userData && userData.user.email}</p>
        <p>{userData && userData.user.cpf}</p>
        <button onClick={() => goToProfileEdit(history)}>Editar perfil</button>
      </div>

      <div>
        <p>{address && address.address.street}, {address && address.address.number} - {address && address.address.neighbourhood}</p>
        <button onClick={() => goToAddressEdit(history)}>Editar endereço</button>
      </div>

      <OrdersHistory />
    </div>
  );
}

export default ProfilePage;