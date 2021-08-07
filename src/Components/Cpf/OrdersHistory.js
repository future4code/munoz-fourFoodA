import React from "react"
import useRequestData from "../../hooks/useRequestData";

function OrdersHistory () {
  const history = useRequestData("orders/history", "orders")

  return (
    <div>
      <h1>History</h1>
      {history && history.length ? history.map((order) => {

      }) : <p><strong>Você não realizou nenhum pedido</strong></p>}
    </div>
  );
}

export default OrdersHistory