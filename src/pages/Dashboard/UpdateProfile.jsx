import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProfile = () => {
  const user = useLoaderData();

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const age = form.age.value;
    const mobile = form.mobileNumber.value;

    const userInfo = { name, age, mobile };

    fetch(`http://localhost:5000/user/${user?.email}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Phone Updated Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset();
        }
      });
  };

  return (
    <div>
      <h1 className="text-3xl mb-7">Update Profile </h1>
      <form onSubmit={handleUpdateProfile} className="flex flex-col gap-y-5">
        <div className="flex flex-col">
          <label className="text-xl pb-2">User Name</label>
          <input
            type="text"
            name="name"
            defaultValue={user?.name}
            placeholder="Name"
            className="py-2 px-1 bg-slate-50"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xl pb-2">User Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            disabled
            defaultValue={user?.email}
            className="py-2 px-1 bg-slate-50"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xl pb-2">User Age</label>
          <input
            type="text"
            name="age"
            placeholder="User Age"
            defaultValue={""}
            className="py-2 px-1 bg-slate-50"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xl pb-2">User Mobile</label>
          <input
            type="text"
            name="mobileNumber"
            defaultValue={""}
            placeholder="Mobile Number"
            className="py-2 px-1 bg-slate-50"
          />
        </div>
        <div className="flex flex-col">
          <input
            type="submit"
            value={"Update Profile"}
            className="py-2 px-1 bg-slate-950 text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
