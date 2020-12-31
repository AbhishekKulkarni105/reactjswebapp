import React from 'react';
import './App.module.css';
import Topbar from './Components/Topbar/Topbar';
import OrderListing from './Container/OrderListing/OrderListing';
import LogIn from './LogIn/LogIn';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import classes from './App.module.css';
import { ROUTE_ENDPOINTS } from './Route';
import User from './Container/UserListing/User'
import OrderDetail from './Container/OrderDetail/OrderDetail'

import ProductListingPage from './Container/ProductListing/Product';
import ProductDeatil from './Container/ProductDetail/ProductDetail';



class App extends React.Component {
  state = {
    loginStatus: localStorage.getItem('loginStatus') === "true"
  }

  onUserLoggedIn = () => {
    localStorage.setItem('loginStatus', true)
    this.setState({loginStatus: true})
  }
  
  onUserLoggedOut = () => {
    localStorage.setItem('loginStatus', false)
    this.setState({loginStatus: false})
  }

  render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Topbar loginStatus={this.state.loginStatus} onUserLoggedOut={this.onUserLoggedOut} />
          <main className={classes.MainContainer}>
            <Switch>
           
            {
              !this.state.loginStatus ? 
                <>
                  <Route path={ROUTE_ENDPOINTS.LOGIN_PAGE} render={() => <LogIn onUserLoggedIn={this.onUserLoggedIn} />} />
                  <Route render={() => <Redirect to={ROUTE_ENDPOINTS.LOGIN_PAGE} />} />
                </>
              :
              <>
              <Route path={ROUTE_ENDPOINTS.ORDER_LIST} component={OrderListing} />
              <Route path={ROUTE_ENDPOINTS.ORDER_DETAIL} component={OrderDetail} />
              <Route path={ROUTE_ENDPOINTS.LOGIN_PAGE} component={() => <Redirect to={!this.state.loginStatus ? ROUTE_ENDPOINTS.LOGIN_PAGE : ROUTE_ENDPOINTS.ORDER_LIST} />} />
              <Route path={ROUTE_ENDPOINTS.PRODUCT_LIST} component={ProductListingPage} />
              <Route path={ROUTE_ENDPOINTS.PRODUCT_DETAIL} component={ProductDeatil} />
              <Route path={ROUTE_ENDPOINTS.USER_LIST} component={User} />
              <Route exact path={ROUTE_ENDPOINTS.HOME_PAGE} render={() => <Redirect to={!this.state.loginStatus ? ROUTE_ENDPOINTS.LOGIN_PAGE : ROUTE_ENDPOINTS.ORDER_LIST} />} />
          
              
              
              </>
            
            
            }
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;