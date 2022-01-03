import React from 'react';

import ProductApp from './components/ProductApp';
import CartApp from './components/CartApp';




export default () => {
  return (
    <div>



     <center> <h1>Micro-FrontEnds!</h1></center>
      <h3>!!!The products are:</h3>
      <hr />
      <ProductApp /> 
      <hr />
      <h3>!!!Items added to the cart are:</h3>
      <hr />

      <CartApp/>



    </div>
  );
};
