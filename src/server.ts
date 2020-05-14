import { ApolloServer } from 'apollo-server'
import { schema } from './schema'
import { context } from './context'

new ApolloServer({
  schema,
  context,
}).listen({ port: 4000 }, () => console.log('Listening on port 4000'))
