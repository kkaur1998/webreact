import React from 'react';
import Rater from './Rater';
class Product extends React.Component{
constructor(){
super();
}
render(){
    return(
      <div>
        <div className={"thumbnail"}>
          <img src="Images/Laptop.jpg" className="img img-rounded img-responsive"/>
          <div className="caption text-align-center">
            <a href="#"><h3>Gamia Laptop</h3></a>
              <h4><span>Rs. 33000</span></h4>
              <p>An excellent choice for an awesome gaming experience.</p>
              <Rater />
              <span>3/5</span>
          </div>
        </div>
      </div>
    )
  }
}
export default Product;