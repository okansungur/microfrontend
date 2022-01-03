import axios from 'axios'


class servislerim {


    executeAddToCartService( cartId, productId, quantity, price, customerId, productName) {
        
            var params = new URLSearchParams();
            params.append("cartId", cartId);
            params.append("productId", productId);
            params.append("quantity", quantity);
            params.append("price", price);
            params.append("customerId", customerId);
            params.append("productName", productName);
           
            console.log('executeAddToCartService user logged in')
            return axios.get('http://127.0.0.1:9694/cart/addCart');
            console.log('sucess!!!')
            
        
    }


}

export default new servislerim()
