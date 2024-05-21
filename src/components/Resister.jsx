import React, { useState } from "react";

const Resister = () => {
  const [name, setName] = useState("gd");
  const [birth, setBirth] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeBirth = (e) => {
    const date = new Date(e.target.value);
    date.setBirth(date.getDate() - 1);

    const adjustedDate = date.toISOString().split("T")[0];
    setBirth(adjustedDate);

    e.target.value = adjustedDate;
    console.log(adjustedDate);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder={"이름"} />
      </div>
      <div>
        <input value={birth} onChange={onChangeBirth} type="date" />
        {birth}
      </div>
    </div>
  );
};

export default Resister;
