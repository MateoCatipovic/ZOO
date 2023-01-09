import { NextPage } from "next";
import Navbar from "./components/Navbar";

const  Home: NextPage = () => {
  return (
    <div className="bg-[url('../images/dark_cover.png')] bg-no-repeat  bg-cover  h-screen">
      <Navbar />
    </div>
  );
};

export default Home;
