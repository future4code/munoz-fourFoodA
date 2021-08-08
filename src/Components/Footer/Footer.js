import React from "react";
import { FooterContainer, IconImage } from "./styled";
import { useHistory } from "react-router-dom";
import home from "../../assets/homepage.svg";
import cart from "../../assets/shopping-cart.svg";
import avatar from "../../assets/avatar.svg";
import homeRed from "../../assets/homepageRed.svg";
import cartRed from "../../assets/shopping-cartRed.svg";
import avatarRed from "../../assets/avatarRed.svg";
import {
  goToProfile,
  goToFeed,
  goToCart,
} from "../../Routes/Coordinator";

const Footer = () => {
  const history = useHistory();

  return (
    <FooterContainer>
      <IconImage
        src={history.location.pathname === "/feed" ? homeRed : home}
        alt="home"
        onClick={() => goToFeed(history)}
      />
      <IconImage
        src={history.location.pathname === "/carrinho" ? cartRed : cart}
        alt="cart"
        onClick={() => goToCart(history)}
      />
      <IconImage
        src={history.location.pathname === "/perfil" ? avatarRed : avatar}
        alt="avatar"
        onClick={() => goToProfile(history)}
      />
    </FooterContainer>
  );
};
export default Footer;
