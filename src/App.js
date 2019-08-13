import React from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect }    from "react-router-dom";
import {SportStoreDataStore} from './data/DataStore';
import {ShopConnector} from './shop/ShopConnector';
import './App.css';

function App() {
  return <Provider store={ SportStoreDataStore }>
            <Router>
              <Switch>
                <Route path="/shop" component={ ShopConnector } />
                  <Redirect to="/shop" />
              </Switch>
            </Router>
          </Provider>
}

export default App;
