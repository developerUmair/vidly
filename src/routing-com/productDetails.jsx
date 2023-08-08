/*  import React, { Component } from "react";
import { useParams } from "react-router-dom";

class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products
  };

  
  render() {
    const {id} = useParams()
    return (
      <div>
        <h1>Product Details - {id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails; */

import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = (props) => {
  const navigate = useNavigate();

  const handleSave = () => {
    navigate("/products", { replace: true });
  };
  const { id } = useParams();
  return (
    <div>
      <h1>Product Details - {id}</h1>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ProductDetails;
