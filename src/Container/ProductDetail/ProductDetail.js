import axios from 'axios'
import React from 'react'
import classes from '../ProductDetail/ProductDetail.module.css'
import Product from '../../Components/Product/Product'
import ProductDetails from '../../Components/Product/Constants'

class ProductDeatil extends React.Component{
 state ={
     ProductDeatil:[],
 }
 
componentDidMount(){
    console.log('Inside CDM')
    axios.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products/56104-020")
   
    .then((response)=>{
     
        this.setState({ProductDeatil: [...response.data]});
    })
    .catch(err => {
        console.log(err);
    });
}

render(){
    console.log('Inside render');
    return(
        <div className={classes.Main}>
        <h1 className={classes.MainHeading}>PRODUCT DETAILS</h1>
     
        {
            ProductDetails.map(item =>{
                return <Product  id={item.id} medicineName={item.medicineName} medicineBrand={item.medicineBrand}  expiryDate={item.expiryDate} unitPrice={item.unitPrice} prescriptionRequired={item.prescriptionRequired} stock={item.stock} />
            })
        }
        </div>
        );
}


}

export default ProductDeatil;