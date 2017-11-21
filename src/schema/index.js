import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `
  type Query {
    allLinks: [Link!]!
  }

  type Mutation {
    createLink(url: String!, description: String!): Link
  }

  type Link {
    id: ID!
    url: String!
    description: String!
  }
`

export default makeExecutableSchema({typeDefs, resolvers})
