import { useEffect, useState } from "react";
import SingleProduct from "../../components/Home/SingleProduct";

const AllProducts = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/phones")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  return (
    <div>
      <h2 className="text-4xl text-center py-12 font-bold">All Products</h2>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {allData.map((phone) => (
          <SingleProduct phone={phone} key={phone.id} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
