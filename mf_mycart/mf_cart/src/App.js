import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';


import CartPage from './components/MyCartComponent';



export default () => {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            
            <Route  path="/" component={CartPage} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
