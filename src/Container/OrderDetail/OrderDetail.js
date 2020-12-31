import axios from 'axios'
import React from 'react'
import classes from '../OrderDetail/OrderDetail.module.css'
import Order from '../../Components/Order/Order'
import OrderDetailsData from '../../Components/Order/Constant'

class OrderDetail extends React.Component{
 state ={
     videoList:[],
 }
 
componentDidMount(){
    console.log('Inside CDM')
    axios.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders/714-69-5617")
   
    .then((response)=>{
     
        this.setState({videoList: [...response.data]});
    })
    .catch(err => {
        console.log(err);
    });
}

render(){
    console.log('Inside render');
    return(
        <div className={classes.Main}>
        <h1 className={classes.MainHeading}>Order Detail</h1>
     
        {
            OrderDetailsData.map(item =>{
                return <Order  id={item.id} customerName={item.customerName} orderDate={item.orderDate}  amount={item.amount} orderStatus={item.orderStatus} />
            })
        }
        </div>
        );
}


}

export default OrderDetail;