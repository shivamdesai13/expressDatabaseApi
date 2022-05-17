const baseUrl = "http://localhost:8000/students";
const AXIOS = require("axios");
const CHANCE = require("chance");
let chance = new CHANCE();

const payload = {
  name: "reena",
  email: "reema@111.com",
  phone: chance.phone({ formatted: false }),
  address: "indore",
};

describe("Test For Register Confirmation", () => {
  test("registration successful", async () => {
    const result = await AXIOS.post(baseUrl, payload);
    expect(result.status).toEqual(201);
  });

  test.only("testCode", () => {
    console.log(chance.email());
    console.log(chance.first());
    console.log(chance.name());
    console.log(chance.name({ middle: true }));
    console.log(chance.name({ middle_initial: true }));
    console.log(chance.name({ prefix: true, gender: "female" }));
    console.log(chance.name({ sufix: true }));
    console.log(chance.name({ gender: "male" }));
  });

});
