import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';


import ProductPage from './components/MyProductComponent';



export default () => {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            
            <Route  path="/" component={ProductPage} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
