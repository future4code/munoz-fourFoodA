import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { RestaurantCardContainer, ContainerTimeShipping, Content } from './styled';

function ProductCard(props) {
    return (
        <RestaurantCardContainer>
        <Card className={"ProductCard"}>
            <CardActionArea /*key={props.product.id} onClick={()=>handleRestaurant(props.product.id)}*/ >
                <CardMedia
                    className={"media"}
                    image={props.product.photoUrl}
                    title={props.product.name}
                    />
                
                <Content >
                    <Typography gutterBottom className={"name"}
                        color="primary" >
                        {props.product.name}
                    </Typography>
                    <ContainerTimeShipping>
                        <Typography className={"description"} variant="body2" color="textSecondary" component="p">
                            {props.product.description}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            R$ {props.product.price}
                        </Typography>
                    </ContainerTimeShipping>
                </Content>
                
            </CardActionArea>
        </Card>
        </RestaurantCardContainer>
    )
}

export default ProductCard