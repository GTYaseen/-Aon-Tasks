fs = require("fs");

const getAllUser = () => {
  //TODO: Read file and return users here
  try {
    let resp = fs.readFileSync("users.json", "utf-8");
    let list = JSON.parse(resp);
    return list;
  } catch (err) {
    console.log(err);
  }
};

const getFirstUser = (list) => {
  //TODO: get first user of list
  let firstUser = list[0];
  return firstUser;
};

const getLast = (list) => {
  //TODO: get last user of list
  let lastUser = list[list.length - 1];
  return lastUser;
};

const getUserByID = (list, userID) => {
  //TODO: get user object by id
  let user = list.find((user) => user.id === userID);
  return user;
};

const getUserByCompanyName = (list, companyName) => {
  //TODO: get user object by company name
  let user = list.find((user) => user.company.name === companyName);
  return user;
};

const getUsersByCity = (list, city) => {
  //TODO: get users that live in this city
  let user = list.filter((user) => user.address.city === city);
  return user;
};

const getStreet = (list, userID) => {
  //TODO: get street name by userID
  let UserS = list.find((user) => user.id === userID);
  return UserS.address.street;
};

const addNewUser = (list, userObject) => {
  //TODO: add new user to the list
  let newList = list;
  newList.push(userObject);
  return newList;
};

const updateUser = (list, userID, newEmail) => {
  //TODO: update email when id === userID
  let user = list.find((user) => user.id === userID);
  if (user.id === userID) user.email = newEmail;
  return user;
};

const deleteUserById = (list, userID) => {
  //TODO: remove user when id === userID
  let user = list.find((user) => user.id === userID);
  if (user.id === userID) list = list.filter((user) => user.id !== userID);
  return list;
};

module.exports = {
  getAllUser,
  getFirstUser,
  getLast,
  getUserByID,
  getUserByCompanyName,
  getUsersByCity,
  getStreet,
  addNewUser,
  updateUser,
  deleteUserById,
};
