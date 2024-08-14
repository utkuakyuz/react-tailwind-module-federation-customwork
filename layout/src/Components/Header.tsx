import React from "react";
import "./header.css";
import "tailwindcss/tailwind.css";

type Props = { name?: string };
const Header = (props: Props) => {
  const { name } = props;
  return (
    <div className="flex text-white p-8 justify-center w-full bg-slate-400">
      <h1>This is the Header, Welcome {name} </h1>
    </div>
  );
};

export default Header;
