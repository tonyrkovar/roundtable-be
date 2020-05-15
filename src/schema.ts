import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers/index";
import { Context, context } from "./context";

const typeDefs = `
  type User {
    id: ID!
    email: String!
    password: String!
	createdAt: String! 
  }

  type Roundtable{
	  id: ID!
	  name: String!
	  createdAt: String! 
  }

  type Query {
    info: String!
    user: User!
    userById(id: ID!): User!
	users: [User!]!
	roundtable: Roundtable!
	roundtables: [Roundtable]!
  }

  type Mutation {
    createUser(email: String!, password: String!): User!
    deleteUser(id: ID): User!
	updateUser(id: ID!, email: String, password: String): User!
	createRoundtable(name: String!): Roundtable! 
  }

  input UserCreateInput {
    email: String!
    password: String!
  }

`;

export const schema = makeExecutableSchema({ typeDefs, resolvers });
