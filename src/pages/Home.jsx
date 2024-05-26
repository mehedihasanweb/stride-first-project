import { useLoaderData } from "react-router-dom";
import Banner from "../components/Home/Banner";
import Products from "../components/Home/Products";
import Accordion from "../components/Home/Accordion";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Banner />
      <Products data={data} />
      <Accordion />
    </div>
  );
};

export default Home;
