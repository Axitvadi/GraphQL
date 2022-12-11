const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    first_name: { type: String },
    last_name: { type: String },
    address: { type: String },
    email: { type: String },
    phone: { type: Number },
    password: { type: String }
  },
  { timestamps: true }
)

module.exports = mongoose.model('user', userSchema)
