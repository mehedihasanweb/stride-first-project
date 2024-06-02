import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditProduct = () => {
  const phone = useLoaderData();

  const [title, setTitle] = useState(phone.title);
  const [brand, setBrand] = useState(phone.brand);
  const [price, setPrice] = useState(phone.number);
  const [description, setDescription] = useState(phone.description);
  const [imageurl, setImageurl] = useState(phone.imageurl);

  const token = localStorage.getItem("token");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const brand = form.brand.value;
    const number = form.number.value;
    const description = form.description.value;
    const imageurl = form.image_url.value;

    const formData = { title, brand, number, description, imageurl };
    console.log(formData);

    await fetch(`http://localhost:5000/phones/${phone._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Phone Updated Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <>
      <h1 className="text-5xl font-bold text-center">Edit a Product</h1>
      <div className="my-16 min-h-screen">
        <form onSubmit={handleSubmit}>
          <div className="lg:flex items-center justify-center gap-16">
            <div className="mt-4">
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray-100 p-4 w-full lg:w-[350px] border border-black rounded-lg"
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                name="brand"
                placeholder="Brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="bg-gray-100 p-4 w-full lg:w-[350px] border border-black rounded-lg"
              />
            </div>
          </div>

          <div className="lg:flex items-center justify-center gap-16">
            <div className="mt-4">
              <input
                type="text"
                name="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="bg-gray-100 p-4 w-full lg:w-[350px] border border-black rounded-lg"
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-gray-100 p-4 w-full lg:w-[350px] border border-black rounded-lg"
              />
            </div>
          </div>

          <div className="lg:flex items-center justify-center gap-16">
            <div className="mt-4">
              <input
                type="text"
                name="image_url"
                placeholder="IMAGE_URL"
                value={imageurl}
                onChange={(e) => setImageurl(e.target.value)}
                className="bg-gray-100 p-4 w-full lg:w-[350px] border border-black rounded-lg"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-center items-center">
            <input
              type="submit"
              value="Edit Product"
              className="btn mt-4 w-full lg:w-[600px] bg-red-500 text-white p-4"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProduct;
