const { login, registerUser } = require('../../controllers/authController')
const { users } = require('../../controllers/userController')
const { clubs, createClub, getClubById, deleteClubById, updateClub } = require('../../controllers/clubController')

module.exports = {
  createClub,
  clubs,
  getClubById,
  updateClub,
  deleteClubById,
  registerUser,
  login,
  users
}
