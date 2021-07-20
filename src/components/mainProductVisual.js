import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

function mainProductVisual({id, handleProductChange}) {

  const initialId = id || '11001';
  const [currentProduct, setCurrentProduct] = useState(initialId);

  const changeCurrentProduct = (newProductId) => {
    console.log('updating current product');
    setCurrentProduct(newProductId);
  }

  useEffect(() => {
    axios.get(`/products/${id}/styles`)
    .then(({data}) => {
      handleProductChange(data)
    })
    .catch((err) => {
      throw err;
    });
  });

  return (
    <div>current product visual is working!</div>
  )
}

export default mainProductVisual;