import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProductCardDashboard = ({ phone, onDelete }) => {
  const { id, imageurl, title, description, price, brand } = phone;
  console.log(phone);
  const handleDelete = async () => {
    await fetch(`http://localhost:3000/phones/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        onDelete(id);
      });
  };

  return (
    <div className="card w-96 h-[600px] bg-base-100 shadow-xl">
      <figure>
        <img src={imageurl} alt="phone" className="w-[400px] h-[400px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold">Price: ${price}</h3>
        <p className="mb-6">{description}</p>
        <div className="card-actions justify-start">
          <button className="btn bg-indigo-500 text-white">
            <Link to={`/products/${id}`}>See Details</Link>
          </button>
          <button className="btn bg-green-600 text-white">
            <Link to={`edit/${id}`}>Edit</Link>
          </button>
          <button onClick={handleDelete} className="btn bg-red-500 text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCardDashboard;
