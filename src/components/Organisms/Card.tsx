import React from "react";
import Lists from "../Molecules/Lists";
import TodoInput from "../Molecules/TodoInput";

const Card: React.FC = () => {
  return (
    <>
      <TodoInput />
      <Lists />
    </>
  );
};

export default Card;
