import React from "react"
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../Constants/Urls";

function OrdersHistory () {
  const history = useRequestData(`${BASE_URL}/orders/history`, "")
  
  return (
    <div>
      <h1>History</h1>
      {history && history.length ? history.map((order) => {

      }) : <p><strong>Você não realizou nenhum pedido</strong></p>}
    </div>
  );
}

export default OrdersHistory