let helper = require("./helper");
NewUser = {
  id: 11,
  name: "Yaseen Taha",
  username: "GTYaseen",
  email: "steamgtyaseent11@gmail.com",
  address: {
    street: "Douglas Extension",
    suite: "Suite 847",
    city: "Baghdad",
    zipcode: "10001",
    geo: {
      lat: "-68.6102",
      lng: "-47.0653",
    },
  },
  phone: "07714230015",
  website: "no",
  company: {
    name: "Romaguera-Jacobson",
    catchPhrase: "Face to face bifurcated interface",
    bs: "e-enable strategic applications",
  },
};
let list = helper.getAllUser();
console.log(list);

console.log(helper.getFirstUser(list));
// console.log(helper.getLast(list));
// console.log(helper.getUserByID(list, 9));
// console.log(helper.getUserByCompanyName(list, "Deckow-Crist"));
// console.log(helper.getUsersByCity(list, "McKenziehaven"));
// console.log(helper.getStreet(list, 2));
// console.log(helper.addNewUser(list, NewUser));
// console.log(helper.updateUser(list, 2, "steamgtyaseent11@gmail.com"));
// //for update user (list, userID, newEmail)
// console.log(helper.deleteUserById(list, 1));
