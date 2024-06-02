import Swal from "sweetalert2";

const AddProduct = () => {
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

    await fetch("http://localhost:5000/phones", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire({
            title: "Success!",
            text: "Phone Updated Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
        form.reset();
        console.log(data);
      });
  };

  return (
    <>
      <h1 className="text-5xl font-bold text-center">Add a Product</h1>
      <div className="my-16 min-h-screen">
        <form onSubmit={handleSubmit}>
          <div className="lg:flex items-center justify-center gap-16">
            <div className="mt-4">
              <input
                type="text"
                name="title"
                placeholder="Title"
                required
                className="bg-gray-100 p-4 w-full lg:w-[350px] border border-black rounded-lg"
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                name="brand"
                placeholder="Brand"
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
                className="bg-gray-100 p-4 w-full lg:w-[350px] border border-black rounded-lg"
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                name="description"
                placeholder="Description"
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
                className="bg-gray-100 p-4 w-full lg:w-[350px] border border-black rounded-lg"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-center items-center">
            <input
              type="submit"
              value="Add Product"
              className="btn mt-4 w-full lg:w-[600px] bg-red-500 text-white p-4"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
