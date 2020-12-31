import React from 'react';
import classes from '../Order/Order.module.css';


const Order = (props) =>{
return(
    <div className={classes.MainItem} >
    <h3 className={classes.Items}>OrderID - {props.id}</h3>
    <h3 className={classes.Items}>CustomerName - {props.customerName}</h3>
    <h3 className={classes.Items}>OrderDate -{props.orderDate}</h3>
    <h3 className={classes.Items}>Amount -{props.amount}</h3>
  <h3 className={classes.Items}>OrderStatus -{props.orderStatus}</h3>
  
    
    </div>
)
}
export default Order;