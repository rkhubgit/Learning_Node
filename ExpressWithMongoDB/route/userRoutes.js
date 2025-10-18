
const express = require('express');
const {Login, Signup, Profile, GetUserList, UpdateUser, deleteUser, pagiNated} = require("../Controllers/userController")

const router = express.Router()


router.post('/login', Login)
router.post('/signup',Signup)
router.post('/profile/:id', Profile)
router.get("/userList", GetUserList)
router.patch('/editUser/:id', UpdateUser)
// router.patch('/editUser/:email', UpdateUser)
router.delete('/:id', deleteUser);
router.get('/paginated', pagiNated)

module.exports = router;
