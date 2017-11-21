import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

import schema from './schema'

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}))

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}))

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Hackernews GraphQL server running on port ${PORT}.`)
})
