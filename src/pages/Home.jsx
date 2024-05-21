import React from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [params, setParams] = useSearchParams();
  console.log(params.get("value"));

  const updateQueryParams = () => {
    const newParams = new URLSearchParams(params);

    newParams.set("value", "afterValue");

    setParams(newParams);
  };
  return (
    <div>
      <button onClick={updateQueryParams}>gg</button>
    </div>
  );
};

export default Home;
