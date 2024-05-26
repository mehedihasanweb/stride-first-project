import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = ({ phone }) => {
  const { id, imageurl, title, description, price, brand } = phone;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={imageurl} alt="phone" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold">Price: ${price}</h3>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link to={`/products/${id}`}>See Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
