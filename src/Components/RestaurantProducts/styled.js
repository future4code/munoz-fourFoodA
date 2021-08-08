import styled from 'styled-components'

export const RestaurantCardContainer = styled.div`
display: grid;
gap:20px;
padding:1rem;
margin-bottom: 72px;
align-items: center;
width: 90%;

   .ProductCard{
    display:flex;
    justify-content: space-between;
    
    flex-direction: row;
    width: 20.5rem;
    height: 18rem;
    margin: 0.438rem 0 0;
    border-radius: 8px;
    border: solid 1px var(--greyish);


      
   }

  // .CardRestaurants {
  //   align-items: center;
  //   justify-content:center;
  //   max-width: 21.5rem;
  //   max-height:11.75rem;
  // }

  // .name{
  //   margin:0;
    
  // }

  .media {
    width: 50%;
    height: 7.5rem;
    margin: 0 0 0.75rem;
    object-fit: contain;
  
  
  
  }
`
export const ContainerTimeShipping = styled.div`
display:flex;

justify-content: space-between;

  .description{
    color:grey;
    flex-wrap:wrap;
  }

`
export const Content = styled.div`
    padding: 1rem;
    padding-top:0.1rem;
    font-size:1rem;
    display: flex;
    flex-direction: row;
    flex-direction: column;
    align-items: flex-end;
    


    .name{
        
      margin-bottom:50px;
      width: 10.438rem;
      height: 1.125rem;
      // margin: 1.125rem 3.063rem 0.5rem 1rem;
      
      font-family: Roboto;
      font-size: 1rem;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.39px;
      color: #e8222e;
    }
   
    
    
    
   
   
`

