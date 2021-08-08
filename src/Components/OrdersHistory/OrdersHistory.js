import React from "react"
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../Constants/Urls";


function OrdersHistory () {
  const history = useRequestData(`${BASE_URL}/orders/history`, "")
  
  return (
    <div>
      {history && history.length ? history.map((order) => {

      }) : <h3><strong>Você não realizou nenhum pedido</strong></h3>}
    </div>
  );
}

export default OrdersHistory