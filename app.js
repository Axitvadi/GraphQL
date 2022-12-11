require('dotenv').config()
require('./database/conn')
const express = require('express')
const app = express()
const { graphqlHTTP } = require('express-graphql')
const PORT = process.env.PORT || 3000
const swaggerUi = require('swagger-ui-express')
const cors = require('cors')
const { seedAdmin } = require('./seeders/seed')
const { errorHandler } = require('./utils/errorHandler')
const graphQlSchema = require('./graphql/schema/index')
const graphQlResolvers = require('./graphql/resolvers/index')
const corsOptions = { origin: process.env.ALLOW_ORIGIN }
const jwtAuth = require('./middleware/jwtAuth')
const notFound = require('./middleware/404ErrorHandler')
const swaggerDocument = require('./Graphql.postman_collection.json-OpenApi3Json.json')
app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

/* for redirect to graphql */
app.get('/', (req, res, next) => { res.redirect('/graphql') })

/* for swagger  */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use(jwtAuth)

app.use('/graphql', graphqlHTTP({
  schema: graphQlSchema,
  rootValue: graphQlResolvers,
  graphiql: true // for visual ui interface
}))

seedAdmin()
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
