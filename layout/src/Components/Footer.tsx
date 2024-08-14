import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";

type Props = {};

import "./footer.css";
const Footer = (props: Props) => {
  return (
    <div className="bg-[#111827] p-4 text-white flex justify-between">
      <div className="bg-[#3730A3] rounded-lg">
        <button className="px-4 py-2 flex flex-row items-center justify-center gap-2 text-sm">
          <InfoOutlinedIcon />
          Need More Info
        </button>
      </div>
      <div className="bg-[#3730A3] rounded-lg">
        <button className="px-4 py-2 flex flex-row items-center justify-center gap-2 text-sm">
          <InsertLinkOutlinedIcon />
          Go To Github
        </button>
      </div>
    </div>
  );
};

export default Footer;
