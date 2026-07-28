const express = require("express");
const router = express.Router();
const friends = require("../models/friends");
const { filterFriends, getInfo } = require("../controllers/friendsControllers");

router.get("/", (req, res) => {
  res.json(friends);
});

router.get("/filter", (req, res) => {
  console.log(req.query);

  const matchingFriends = filterFriends(req);

  //if there are matching friends, return them with a 200 status code, otherwise return a 404 with an error message
  if (matchingFriends.length > 0) {
    res.status(200).json(matchingFriends);
  } else {
    res.status(404).json({ error: "No friends matching criteria" });
  }
});

// get info about request headers
router.get("/info", (req, res) => {
  console.log(req.headers);

  res.status(200).json(getInfo(req));
});

// get a friend by ID
router.get("/:id", (req, res) => {
  console.log(req.params);
  let friendId = req.params.id;

  let friend = friends.find((f) => f.id == friendId);

  if (!friend) {
    res.status(404).json({ error: "Friend not found" });
  } else {
    res.json({ result: friend });
  }
});

// add a new friend
router.post("/", (req, res) => {
  let newFriend = req.body;
  console.log(newFriend);

  if (!newFriend.name || !newFriend.gender) {
    res
      .status(500)
      .json({ error: "Friend object must contain a name and gender" });
    return;
  } else if (!newFriend.id) {
    newFriend.id = friends.length + 1;
  }

  friends.push(newFriend);
  res.status(200).json(newFriend);
});

router.put("/:id", (req, res) => {
  let friendId = req.params.id;
  let updatedFriend = req.body;

  let friendIndex = friends.findIndex((f) => f.id == friendId);
  if (friendIndex === -1) {
    res.status(404).json({ error: "No friend found with ID " + friendId });
    return;
  }

  friends[friendIndex] = { ...friends[friendIndex], ...updatedFriend };

  res.json({
    result: "Updated friend with ID " + friendId,
    data: friends[friendIndex],
  });
});

module.exports = router;
