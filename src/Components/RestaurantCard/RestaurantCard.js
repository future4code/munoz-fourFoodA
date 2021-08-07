import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { RestaurantCardContainer, ContainerTimeShipping, Content } from './styled';
import { useHistory } from "react-router-dom";

const RestaurantCard = (props) => {
    const history = useHistory();

    const handleRestaurant = (id) =>{
      history.push(`restaurant/${id}`)
    }
    
 const RestaurantsList =
   props.restaurants.restaurants &&
   props.restaurants.restaurants.map((r) => {
     return (  
     <Card className={"CardRestaurants"}>      
       <CardActionArea key={r.id} onClick={()=>handleRestaurant(r.id)} >
             <CardMedia
             className={"media"}
             image={r.logoUrl}
             title={r.name}
           />
           <Content >
             <Typography gutterBottom className={"name"}
             color="primary" >
               {r.name}
             </Typography>
             <ContainerTimeShipping>
             <Typography variant="body2" color="textSecondary" component="p">
               {r.deliveryTime} min
             </Typography>
             <Typography variant="body2" color="textSecondary" component="p">
               Frete R${r.shipping}
             </Typography>
            </ContainerTimeShipping>
           </Content>
          </CardActionArea>
          </Card>          
       );
   });

  return ( 
  <RestaurantCardContainer>
  
          {RestaurantsList}      
    
    </RestaurantCardContainer>
  );
}
export default RestaurantCard