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
    case "order":
      datum = {
        title: "HOTELS",
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
  }
  const { data } = useFetch("/users/countUsers");
  console.log(data);


  return (
    <div className="widget">
      <div className="left">
        <span className="title">{datum.title}</span>
        <span className="counter">
          {datum.isMoney && "$"} {data.users}
        </span>
        <span className="link">{datum.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {datum.icon}
      </div>
    </div>
  );
};

export default Widget;
