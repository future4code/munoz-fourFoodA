import styled from 'styled-components'

export const RestaurantCardContainer = styled.div`
display: grid;
gap:20px;
padding:1rem;
margin-bottom: 72px;
align-items: center;

  .CardRestaurants {
    align-items: center;
    justify-content:center;
    max-width: 21.5rem;
    max-height:11.75rem;
  }

  .name{
    margin:0;
  }

  .media {
  width: 100%;
  height: 7.5rem;
  margin: 0 0 0.75rem;
  object-fit: contain;
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
`