import Sidebar from "./emp/sidebar/Sidebar";
// import Topbar from "./emp/topbar/Topbar";
import Home from './emp/emppages/emphome/EmpHome'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import UserList from "./emp/emppages/userList/UserList";
import User from "./emp/emppages/user/User";
import NewUser from "./emp/emppages/newUser/newUser";
import ProductList from "./emp/emppages/ProductList/ProductList";
import Product from "./emp/emppages/Product/Product";
import NewProduct from "./emp/emppages/newProduct/NewProduct";
import Employee from "./employee/employee";

function empDashboard() {
    return (
        <Router path="/employee">
            <div>
                <Employee />
            </div>

            {/* <div className="container">
                <Sidebar />
                <Switch>
                    <Route exact path="/employee/home">
                        <Home />
                    </Route>
                    
                    <Route path="/employee/users">
                       <UserList />
                    </Route>
                    <Route path="/employee/user/:userId">
                       <User/>
                    </Route>
                    <Route path="/employee/newUser">
                        <NewUser/>
                    </Route>
                  

                    <Route path="/employee/products">
                       <ProductList />
                    </Route>
                    <Route path="/employee/product/:productId">
                       <Product/>
                    </Route>
                    <Route path="/employee/newProduct">
                       <NewProduct/>
                    </Route>


                    
                    <Route path="/employee/newEmp">
                       <NewProduct/>
                    </Route>
                </Switch>


            </div> */}
        </Router>
    );
}

export default empDashboard;