import React from "react";
import "./header.css";
import "tailwindcss/tailwind.css";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

type Props = { name?: string };
const Header = (props: Props) => {
  const { name } = props;
  return (
    <div className="flex text-gray-500 p-4 justify-between w-full bg-white shadow-sm">
      <div className="flex flex-row gap-3">
        <HomeWorkOutlinedIcon />
        <AppsOutlinedIcon />
        {/* <h1>Welcome {name} </h1> */}
      </div>
      <div>
        {name} <AccountCircleOutlinedIcon />
      </div>
    </div>
  );
};

export default Header;
