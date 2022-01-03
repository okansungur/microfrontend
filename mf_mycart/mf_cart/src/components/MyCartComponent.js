import React from 'react';


class MyProductComponent extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
        mesajim: [],
    }

  }

  componentDidMount() {
    const apiUrl = 'http://localhost:9694/cart/getCart';
    //const apiUrl = 'http://localhost:9694/cart/getCart';//Updated
           
    fetch(apiUrl)
     .then((response) => response.json())
 
      .then(
             (response) => {
             var myarray= response;
        
          console.log("MFCart"+myarray);
          
          this.setState({mesajim: myarray});
 
        });

  }
  render() {
    return(
      <div>
        
          <ul>
              {
                  this.state.mesajim.map((item, key) => {
                      return <li key={key}>cartId:{item.cartId} productId: {item.productId}  , quantity: {item.quantity},
                       price: {item.price} $ ,customerId: {item.customerId}  , productName: {item.productName} <hr/>  </li>
                  })
                  
              }
                
          </ul>
      </div>
  )
  }
}
export default MyProductComponent;
