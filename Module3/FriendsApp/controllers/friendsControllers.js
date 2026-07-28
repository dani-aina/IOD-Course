const friends = require("../models/friends");

const filterFriends = (req) => {
  let filterGender = req.query.gender;
  let filterLetter = req.query.letter;
  let matchingFriends = [...friends];

  if (filterGender) {
    matchingFriends = matchingFriends.filter(
      (friend) => friend.gender == filterGender,
    );
  }

  if (filterLetter) {
    matchingFriends = matchingFriends.filter((friend) =>
      friend.name.startsWith(filterLetter),
    );
  }
  return matchingFriends;
};

const getInfo = (req) => {
  const responseHeaders = {
    "user-agent": req.headers["user-agent"],
    "content-type": req.headers["content-type"],
    accept: req.headers["accept"],
  };

  return responseHeaders;
};

const getFriendById = (req) => {
  let friendId = req.params.id;
  let friend = friends.find((f) => f.id == friendId);
  return friend;
};

module.exports = {
  filterFriends,
  getInfo,
};
