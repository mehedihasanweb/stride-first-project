import { useLoaderData } from "react-router-dom";
import Banner from "../components/Home/Banner";
import Products from "../components/Home/Products";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Banner />
      <Products data={data} />
    </div>
  );
};

export default Home;
