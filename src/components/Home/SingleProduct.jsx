import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = ({ phone }) => {
  const { _id, imageurl, title, description, number, brand } = phone;

  return (
    <div className="card w-96 h-[600px] bg-base-100 shadow-xl">
      <figure>
        <img src={imageurl} alt="phone" className="w-[400px] h-[400px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold">Price: ${number}</h3>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link to={`/products/${_id}`}>See Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
