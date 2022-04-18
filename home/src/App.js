import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
// import Signin from './components/Views/Signin';
import AdminSignIn from './components/AdminSignIn'

import Login from './components/Login';
import EmpDashboard from "./components/empDashboard";
import AdminDashboard from './components/AdminDashboard';

import Test from './components/test/Toasttest'



const App = () => {
  return (
    <div>
      <Router>

        <Navbar />
        {/* <Topbar /> */}

        <Switch>
          <Route exact path="/">

            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/adminlogin">
            <AdminSignIn />
          </Route>

          <Route path="/signup" >
            <Signup />
          </Route>

          <Route path="/admin">
            <AdminDashboard />
          </Route>



          <Route path="/employee" >
            <EmpDashboard />
          </Route>

          <Route path="/test" >
            <Test />
          </Route>


        </Switch>

      </Router>




    </div>
  )
}
export default App






























// import React from 'react'
// import './App.css'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import Success from './components/Success';



// const App = () => {
//   return (
//     <div>
//       <Router>

//         <Navbar />
//         <Switch>
//           <Route exact path="/"> 
//             <Home />
//           </Route>

//           <Route path="/login">
//             <Login />
//           </Route>

//           <Route path="/signup" >
//             <Signup />
//           </Route>

//           <Route path="/success">
//             <Success  />
//           </Route>
//         </Switch>

//       </Router>




//     </div>
//   )
// }
// export default App