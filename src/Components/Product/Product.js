import React from 'react';
import classes from '../Product/Products.module.css'


const Product = (props) =>{
return(
    <div className={classes.MainItem} >

    <h3 className={classes.Items} >ProductID - {props.id}</h3>
    <h3 className={classes.Items}>MedicineName - {props.medicineName}</h3>
    <h3 className={classes.Items}>MedicineBrand -{props.medicineBrand}</h3>
    <h3 className={classes.Items}>ExpiryDate -{props.expiryDate}</h3>
    <h3 className={classes.Items}>UnitPrice -{props.unitPrice}</h3>
  <h3 className={classes.Items}>PrescriptionRequired -{props.prescriptionRequired}</h3>
  <h3 className={classes.Items}>Stock -{props.stock}</h3>
  
    
    </div>
)
}
export default Product;