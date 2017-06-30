import React from 'react';
import 'bulma/css/bulma.css'
import {BrowserRouter as Router,Route,NavLink,Switch} from 'react-router-dom'
// import Login from './components/Login'
import UserAccount from './components/UserAccount'
import AdminPage from './components/AdminPage'
const active = {
  fontWeight: 'bold',color: '#00cc99'
}
const App = () => (
  <div>
  <Router>
    <div>
    <nav className="nav">
        <div className="nav-center">
    
        <NavLink className="nav-item" to="/"  >UserAccount</NavLink>  
        <NavLink className="nav-item" to="/AdminPage"  >AdminPage</NavLink>
   
   
      </div>
        
     </nav>
     <hr/>
        

      <Switch>
      <Route exact path="/" component={UserAccount}/>
     <Route exact path="/AdminPage" component={AdminPage}/>
      
      </Switch>
      
    </div>
  </Router>
  
  </div>
  

)
export default App

//  <a className="nav-item">
//         <NavLink to="/ShoppingCart"  activeStyle={active}>ShoppingCart</NavLink>  
//     </a>

//      <Route  path="/ShoppingCart" component={ShopCartComponent}/>

// <nav className="nav">
//         <div className="nav-center">
//     <a className="nav-item">
//     </a>
   
   
//       </div>
        
//      </nav>