import { Redirect, Route, Switch } from "react-router-dom"
import { Admin } from "../../pages/Admin/Admin"


export const AdminRoutes = () => {
    return (
        <div> 
            <Switch>
                <Route path={'/admin'} component = {Admin} exact/>
                <Redirect to={'/admin'}/>
            </Switch>
            
        </div>
     
    )
}