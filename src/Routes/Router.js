import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../Pages/LoginPage/LoginPage"
import SignUpPage from "../Pages/SignUpPage/SignUpPage";
import AdressPage from "../Pages/AdressPage/AdressPage"
import FeedPage from "../Pages/FeedPage/FeedPage"
import RestaurantPage from "../Pages/RestaurantPage/RestaurantPage"
import SearchPage from "../Pages/SearchPage/SearchPage"
import ConfirmPage from "../Pages/ConfirmPage/ConfirmPage"
import RequestPage from "../Pages/RequestPage/RequestPage"
import ProfilePage from "../Pages/ProfilePage/ProfilePage"
import ProfileEditPage from "../Pages/ProfilePage/ProfileEditPage/ProfileEditPage"
import AddressEditPage from '../Pages/ProfilePage/AddressEditPage.js/AddressEditPage';
import HistoryRequestPage from "../Pages/HistoryRequestPage/HistoryRequestPage"
import CartPage from "../Pages/CartPage/CartPage"

function Router () {
  return (
    <BrowserRouter>
    <Switch>
        <Route exact path="/">
            <LoginPage/>
        </Route>

        <Route exact path="/signup">
            <SignUpPage/>
        </Route>

        <Route exact path="/endereco">
            <AdressPage/>
        </Route>

        <Route exact path="/feed">
            <FeedPage/>
        </Route>

        <Route exact path="/restaurant/:id">
            <RestaurantPage/>
        </Route>

        <Route exact path="/procurar">
            <SearchPage/>
        </Route>

        <Route exact path="/confirmar">
            <ConfirmPage/>
        </Route>

        <Route exact path="/pedido">
            <RequestPage/>
        </Route>

        <Route exact path="/perfil">
            <ProfilePage/>
        </Route>

        <Route exact path="/editar-perfil">
            <ProfileEditPage/>
        </Route>

        <Route exact path="/editar-endereco">
            <AddressEditPage/>
        </Route>

        <Route exact path="/historico">
            <HistoryRequestPage/>
        </Route>

        <Route exact path="/carrinho">
            <CartPage/>
        </Route>

    </Switch>
    </BrowserRouter>
  );
}

export default Router;