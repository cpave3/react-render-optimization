import { faker } from "@faker-js/faker";
import * as React from "react";
import randomNumber from "../utils/random-number";

const randomArray = (size = 10) =>
  new Array(size).fill(0).map(() => ({
    id: faker.datatype.uuid(),
    value: randomNumber(),
  }));

export default function List() {
  const [data, setData] = React.useState([]);

  const changeArray = () => {
    setData([...randomArray(1), ...data]);
  };

  return (
    <div>
      <button onClick={changeArray}>Add an item</button>
      <ul>
        {data.map((item) => (
          <li>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}
