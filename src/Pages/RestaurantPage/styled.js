import styled from 'styled-components'


export const RestaurantCardContainer = styled.div`
display: grid;
gap:20px;
padding:1rem;
margin-bottom: 72px;
align-items: center;

  .CardRestaurants {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    justify-content:center;
    max-width: 21.5rem;
    max-height:11.75rem;
  }

  .name{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  
    width: 10.438rem;
    height: 1.125rem;
    
    font-family: Roboto;
    font-size: 1rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    
    color: #e8222e;
  }

  .media {
  width: 50%;
  height: 7.5rem;
  margin: 0 0 0.75rem;
  
  }
`
export const ContainerTimeShipping = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
`
export const Content = styled.div`
    padding: 1rem;
    padding-top:0.1rem;
    font-size:1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;


`