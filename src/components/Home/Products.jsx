/* eslint-disable react/prop-types */
import SingleProduct from "./SingleProduct";

// eslint-disable-next-line react/prop-types
const Products = ({ data }) => {
  return (
    <div className="my-12">
      <h2 className="text-center pb-12 text-4xl ">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
        {data.slice(0, 3).map((phone) => (
          <SingleProduct key={phone._id} phone={phone} />
        ))}
      </div>
    </div>
  );
};

export default Products;
