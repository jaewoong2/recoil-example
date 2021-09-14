import React from "react";

const List: React.FC<JSX.IntrinsicElements["li"]> = ({
  children,
  ...props
}) => {
  return <li {...props}>{children}</li>;
};

export default List;
