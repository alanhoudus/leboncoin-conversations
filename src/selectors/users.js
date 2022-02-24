/**
 * Searches among the users list the corresponding id
 * The list of users
 * @param {*} UserList
 * The id of the user we looked for
 * @param {*} searchedId
 * @returns object
 */
function findUser(usersList, searchedId) {
  const user = usersList.find((testedUser) => testedUser.id === searchedId);
  return user.nickname;
}

export default findUser;
