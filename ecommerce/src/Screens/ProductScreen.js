import react from "react";
import data from "../data";
import { Route, Link } from "react-router-dom";

function ProductScreen(props) {
  console.log(props.match.params.id);
  const product = data.products.find((x) => x.id == props.match.params.id);

  return (
    <div>
      <div className="back">
        <Link to="/">Back to results</Link>
      </div>
      <div className="details">
        <div className="image-details">
          <img src={product.image}></img>
        </div>
        <div className="info-details">
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              {product.rating} stars ({product.reviews} reviews)
            </li>
            <li>
              <b>Rs.{product.price}</b>
            </li>
            <li>Desription:</li>
          </ul>
        </div>
        <div className="action-details">
          <ul>
            <li>
              Price:
              {product.price}
            </li>
            <li>
              status:
              {product.status}
            </li>
            <li>
              Qty:
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </li>
            <li>
              <button className="button"> Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
