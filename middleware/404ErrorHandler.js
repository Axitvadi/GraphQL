/**
 * This moddleware return 404 error if route not found
 */
module.exports = (req, res, next) => {
  const error = new Error('404: Not Found')
  error.statusCode = 404
  return next(error)
}
