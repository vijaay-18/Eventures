const express = require('express');
const {getUser,updateUser,deleteUser, followUser,unFollowUser} = require('../controllers/UserController.js');
const router = express.Router();

router.get('/:id',getUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);
router.put('/:id/follow',followUser)
router.put('/:id/unfollow',unFollowUser)

module.exports = router;