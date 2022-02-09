import { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Cart } from "../../pages/Cart/Cart";
import { Home } from "../../pages/Home";
import { Login } from "../../pages/Login/Login";
import { Navbar } from "../Navbar/Navbar";

export const ClientRoutes:FC = () => {
    return (
        <div>
            
            <Navbar />
            <Switch>
                <Route  path={'/'} component ={Home} exact/>
                <Route path={'/cart'} component={Cart} exact/>
                <Route path={'/login'} component={Login} exact/>
                <Redirect to={'/'}/>
            </Switch>
        </div>
    )
}