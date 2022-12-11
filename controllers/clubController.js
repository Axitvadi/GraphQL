const Club = require('../models/club')

exports.clubs = async (_, req) => {
  const user = req.user
  if (!user) {
    const error = new Error('you are not authorize!')
    error.statusCode = 401
    throw error
  }
  return Club.find().lean()
}

exports.createClub = async ({ clubInput }, req) => {
  const user = req.user
  if (!user) {
    const error = new Error('you are not authorize !')
    error.statusCode = 401
    throw error
  }
  const newClub = await Club.create(clubInput)
  return newClub._doc
}

exports.updateClub = async ({ id, clubUpdateInput }, req) => {
  const updatedClub = await Club.findByIdAndUpdate(id, clubUpdateInput, { new: true })

  if (!updatedClub) {
    const error = new Error('Could not find a club')
    error.statusCode = 422
    throw error
  }

  return updatedClub
}

exports.getClubById = async ({ id }, req) => {
  const club = await Club.findById(id)

  if (!club) {
    const error = new Error('Could not find a club')
    error.statusCode = 422
    throw error
  }

  return club
}

exports.deleteClubById = async ({ id }, req) => {
  const club = await Club.findByIdAndDelete(id)

  if (!club) {
    const error = new Error('Could not find a club')
    error.statusCode = 422
    throw error
  }

  return {
    message: 'Successfully deleted club !'
  }
}
