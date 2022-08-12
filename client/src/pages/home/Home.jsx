import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer overflow-hidden">
        <h1 className="homeTitle text-2xl font-semibold mt-5 "> <span className="text-[#6439FF] ">Explore</span> the Philippines</h1>
          <Featured/>
        <h1 className="homeTitle text-2xl font-semibold mt-5"><span className="text-[#6439FF] ">Choose</span> Accomodation Types</h1>
          <PropertyList/>
        <h1 className="homeTitle text-2xl font-semibold mt-5"><span className="text-[#6439FF] ">Discover</span> New Stays</h1>
          <FeaturedProperties/>
        
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
