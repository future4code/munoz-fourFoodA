import styled from "styled-components";

export const ContainerCart = styled.div`
   display: flex;
   flex-direction: column;
   margin: auto;
   padding-right: 7px;
`

export const Delivery = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #eeeeee ;
    height: 4.75rem;
    padding: 0 1rem;
`
export const ContainerAdress = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #eeeeee ;
    height: 4.75rem;
    padding: 0 1rem;
`
export const PaymentInfo = styled.div`
    padding: 5px 0;
    display: flex;
    border-bottom: 1px solid black;
`

export const Subtotal = styled.div `
   display: flex;
   justify-content: space-between;
   margin-bottom: 15px;
`
export const Shipping = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   padding: 1rem 0;
`