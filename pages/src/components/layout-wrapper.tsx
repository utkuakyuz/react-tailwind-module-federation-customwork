import React, { ReactElement } from "react";

type Props = { children: ReactElement<any, any> };

const LayoutWrapper = (props: Props) => {
  const { children } = props;
  return <div className="w-full h-screen flex flex-col">{children}</div>;
};

export default LayoutWrapper;
