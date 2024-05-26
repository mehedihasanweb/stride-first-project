import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const phone = useLoaderData();
  const { imageurl, title, description, price, brand } = phone;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center md:flex items-center justify-center  min-h-[600px] gap-6">
      <img className="h-[400px] rounded-md" src={imageurl} alt="" />
      <div className="h-[400px] space-y-3 pt-8">
        <h1 className="text-4xl font-semibold">Title: {title}</h1>
        <h3 className="text-xl font-semibold text-gray-600">Price: ${price}</h3>
        <h3 className="text-xl font-semibold text-gray-600">Brand: {brand}</h3>
        <p className="text-xl font-semibold text-gray-600 md:w-[500px]">
          Description: {description}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
