import { Redirect, Route, Switch } from "react-router-dom"
import { NavbarAdmin } from "../../componentsAdmin/Navbar/NavbarAdmin"
import { PizzasTable } from "../../componentsAdmin/PizzasTable/PizzasTable"
import { Admin } from "../../pages/Admin/Admin"


export const AdminRoutes = () => {
    return (
        <div style={{display:'flex'}}> 
            <NavbarAdmin />
            <Switch>
                <Route path={'/admin'} component = {Admin} exact/>
                <Route path={'/admin/pizzas'} component={PizzasTable} exact/>
                <Redirect to={'/admin'}/>
            </Switch>
        </div>
     
    )
}