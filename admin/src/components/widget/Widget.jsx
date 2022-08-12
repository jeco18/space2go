import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Widget = ({ type }) => {
  let datum;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      datum = {
        title: "USERS",
        amount: 15,
        isMoney: false,
        link: (<Link to="/users">See all users</Link>),
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "hotel":
      datum = {
        title: "HOTELS",
        amount: 30,
        isMoney: false,
        link: (<Link to="/hotels">See all hotels</Link>),
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "room":
      datum = {
        title: "ROOMS",
        amount: 6,
        isMoney: false,
        link: (<Link to="/rooms">See all rooms</Link>),
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
  }
  const { data } = useFetch("/users/countUsers");
  console.log(data);


  return (
    <div className="widget">
      <div className="left">
        <span className="title">{datum.title}</span>
        <span className="counter">
          {datum.isMoney && "$"} {datum.amount}
        </span>
        <span className="link">{datum.link}</span>
      </div>
      <div className="right">
        
        {datum.icon}
      </div>
    </div>
  );
};

export default Widget;
