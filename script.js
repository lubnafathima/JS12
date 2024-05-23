const obj = {
  name: "Lubna",
  location: {
    state: "Tamil Nadu",
    city: "Chennai",
    country: "India",
  },
};

const newObj = obj;

console.log(obj);
console.log(obj.location.state);
console.log(obj["location"]["state"]);
console.log(obj["location"]["state"] = "Bangalore");
console.log(obj);
