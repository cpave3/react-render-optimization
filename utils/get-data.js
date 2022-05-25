import { faker } from "@faker-js/faker";

/* eslint-disable no-plusplus */
function getData(rowsToMake) {
  const data = [];
  for (let x = 0; x < rowsToMake; x++) {
    data.push({
      id: faker.datatype.uuid(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      email: faker.internet.exampleEmail(),
      gender: faker.datatype.boolean() ? "male" : "female",
      ip_address: faker.internet.ipv4(),
    });
  }
  return data;
}

export default getData;
