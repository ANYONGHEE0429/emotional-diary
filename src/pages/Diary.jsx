import React from "react";
import { useParams } from "react-router-dom";

const Diary = () => {
  const params = useParams();
  return <div>{params}</div>;
};

export default Diary;
