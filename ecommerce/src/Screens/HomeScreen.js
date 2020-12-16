import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { listProduct } from "../actions/productActions";

function HomeScreen(props) {
  const productList = useSelector((state) => state.productList);
  const { products, error, loading } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProduct());

    return () => {};
  }, []); /* this will run after the execution of whole return statement*/

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <ul className="products">
      {products.map((product) => (
        <li key={product.id}>
          <div className="product">
            <Link to={"/product/" + product.id}>
              <img className="product-image" src={product.image} alt="" />
            </Link>
            <div className="product-name">
              <Link to={"/product/" + product.id}>{product.name}</Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="price">{product.price}</div>
            <div className="product-rating">
              {product.rating} stars {product.reviews} reviews
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default HomeScreen;
