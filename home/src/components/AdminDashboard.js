import Sidebar from "./admin/sidebar/Sidebar";
import React from 'react';

// import Topbar from "./admin/topbar/Topbar";
import AdminHome from './admin/adminpages/adminhome/AdminHome'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import './admin/app.css'
import UserList from "./admin/adminpages/userList/UserList";
import User from "./admin/adminpages/user/User";
import NewUser from "./admin/adminpages/newUser/newUser";
import ProductList from "./admin/adminpages/ProductList/ProductList";
import Product from "./admin/adminpages/Product/Product";
import NewProduct from "./admin/adminpages/newProduct/NewProduct";
import Recipts from "./admin/adminpages/recipts/Recipts";
import Reports from "./admin/adminpages/reports/Reports";
import Viewrecepits from './admin/adminpages/recipts/Viewrecepit'
// import Navbar from './components/Navbar';


function AdminDashboard() {
    return (
        <Route path="/admin">
           <div className="container" id="container">
                <Sidebar />
                {/* <Navbar /> */}
                 <Switch>
                    <Route exact path="/admin/home">
                        <AdminHome />
                    </Route>
                    <Route path="/admin/users">
                        <UserList />
                    </Route>
                    <Route path="/admin/user/:userId">
                        <User />
                    </Route>
                    <Route path="/admin/newUser">
                        <NewUser />
                    </Route>

                    {/* Product ROuters   */}

                    <Route path="/admin/products">
                        <ProductList />
                    </Route>
                    <Route path="/admin/product/:productId">
                        <Product />
                    </Route>
                    <Route path="/admin/newProduct">
                        <NewProduct />
                    </Route>


                    {/* Employee ROute */}
                    <Route path="/admin/newemp">
                        <NewProduct />
                    </Route>


                    {/* recipts */}
                    <Route path="/admin/recipts">
                        <Recipts/>
                    </Route>

                    <Route path="/admin/viewreceipt/:ID">
                        <Viewrecepits/>
                    </Route>


                    {/* reports */}
                    <Route path="/admin/reports">
                        <Reports />
                    </Route>

                </Switch>


            </div>
          </Route>
    );
}

export default AdminDashboard;