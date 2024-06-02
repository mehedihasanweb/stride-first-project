import { useEffect, useState } from "react";
import SingleProductCardDashboard from "../../components/dashboard/SingleProductCardDashboard";
import Swal from "sweetalert2";

const AllProducts = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/phones")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  // handle single phoduct deleting function
  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/phones/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            const remaining = allData.filter((data) => data._id !== id);
            setAllData(remaining);
          });
      } else {
        return;
      }
    });
  };

  return (
    <div>
      <h2 className="text-4xl text-center py-12 font-bold">All Products</h2>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {allData.map((phone) => (
          <SingleProductCardDashboard
            phone={phone}
            key={phone._id}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
