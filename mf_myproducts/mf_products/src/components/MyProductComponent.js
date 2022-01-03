import React from 'react';
import axios from 'axios'


class MyProductComponent extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
        mesajim: [],
        productData:'',
        userData:[]
    }
      this.durum = this.durum.bind(this);
      this.savemetodu = this.savemetodu.bind(this)
    this.getUserData=this.getUserData.bind(this);
  }

  savemetodu() {
    let dataId=this.state.productData;
    console.log("gelen"+this.state.productData);
    this.state.mesajim.map((data, key) => {

      if(data.id==dataId){
        console.log(data.name);
        console.log("card id is=>"+data.cartId);
        console.log("PName is"+data.name);
 
        var params = new URLSearchParams();
 
        params.append("productId", data.id);
        params.append("quantity", data.stock);
        params.append("customerId", 1);
        params.append("productName", data.name);
        params.append("price", data.cost);
        
        console.log('executing CartAddService');
        return axios.get('http://localhost:9694/cart/addCartItem' ,
            { headers: {},
            params
            }
        );

      }
    });

  
}

getUserData(){
  /*var url=document.location.protocol+"//"+document.location.hostname+":7777";
  console.log("url param"+url); 
  const apiUrl = url+"/myredis/getUser/1";*/
  const apiUrl = 'http://localhost:7777/myredis/getUser/1';
    
  fetch(apiUrl)
   .then((response) => response.json())
    .then(
           (response) => {
           var mydata= response;
    console.log(mydata);
        this.setState({userData: response});
    
      });
  
}

durum(event) {

  this.state.productData=event.target.name;
  console.log("MFProduct-status "+this.state.productData);

  this.savemetodu();

  this.setState(
      {
          [event.target.name]: event.target.value
      }
  )
}

  componentDidMount() {
var url=document.location.protocol+"//"+document.location.hostname+":8888";
    const apiUrl = 'http://localhost:8888/myproducts/commonapi/products';
    /*const apiUrl = url+"/myproducts/commonapi/products";
          console.log("url param"+url); */
    fetch(apiUrl)
     .then((response) => response.json())
    
      .then(
             (response) => {
             var myarray= response;
       
          this.setState({mesajim: myarray});

        });
     

      this.getUserData();
    
  }
  render() {
    return(
      <div>
      <center><b> User: {this.state.userData.name} UserId:{this.state.userData.id}</b></center>
        <hr></hr>
        <div className="stock-container">
        {this.state.mesajim.map((data, key) => {
          return (
            <div key={key}>
              {data.id +
                " , " +
                data.name +
                " ," +
                data.cost +
                ", " +
                data.stock}
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn btn-success" name={data.id }  onClick={this.durum}>Buy</button>
            </div>
          );
        })}
      </div>


        
      </div>
  )
  }
}
export default MyProductComponent;
