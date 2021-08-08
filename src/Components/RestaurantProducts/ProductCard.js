import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { RestaurantCardContainer, ContainerTimeShipping, Content } from './styled';
import { useGlobal } from '../../Global/GlobalStateContext';
import ProductQuantity from './SelectProductQuantity';

function ProductCard(props) {
    const { cart, setCart } = useGlobal()
    const [productQuantity, setProductQuantity] = useState(1)
    const [selectQuantity, setSelectQuantity] = useState(false)

    const checkProductInCart = () => {
        const checkCart = cart.find((cartProduct) => {
            if (cartProduct.id === props.product.id) {
                return true
            } else { return false }
        })

        return checkCart
    }

    const checkCart = checkProductInCart()

    const openSelectQuantity = () => {
        setSelectQuantity(true)
    }

    const addToCart = () => {
        const newProduct = {
            ...props.product,
            quantity: productQuantity
        }

        if (!checkCart) {
            setCart([newProduct, ...cart])
        } else {
            const addQuantity = cart.map(cartProduct => {
                if (cartProduct.id === props.product.id) {
                    return cartProduct = {
                        ...newProduct
                    }
                } else {
                    return cartProduct
                }
            })
            setCart(addQuantity)
        }

        setSelectQuantity(false)
    }

    const removeFromCart = () => {
        const newCart = cart.filter(cartProduct => {
            if(cartProduct.id === props.product.id) {
                return false
            } else {
                return true
            }
        })

        setCart(newCart)
    }

    return (
        <RestaurantCardContainer>
            <Card className={"ProductCard"}>
                <CardActionArea>
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
                            <Typography variant="body2" color="textSecondary" component="p">
                                R$ {props.product.price}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Frete R${props.product.shipping}
                            </Typography>
                        </ContainerTimeShipping>
                    </Content>
                    <button onClick={checkCart ? removeFromCart : openSelectQuantity}>{checkCart ? "Remover" : "Adicionar"}</button>
                    {checkCart && <p>{productQuantity}</p>}
                </CardActionArea>
            </Card>
            {selectQuantity && <ProductQuantity 
            quantity={productQuantity} 
            setQuantity={setProductQuantity} 
            addToCart={addToCart}
            setSelectQuantity={setSelectQuantity}
            />}

        </RestaurantCardContainer>
    )
}

export default ProductCard