import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets flex flex-col sm:flex-row">
          <Widget type="user" />
          <Widget type="hotel" />
          <Widget type="room" />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
