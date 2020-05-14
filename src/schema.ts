import { makeExecutableSchema } from "graphql-tools";
import { Context } from "./context";
// type Roundtable{

// }

const typeDefs = `
  type User {
    id: ID!
    email: String!
    password: String!
  }


  type Query {
    info: String!
    user: User!
    userById(id: ID!): User!
    users: [User!]!
  }

  type Mutation {
    createUser(email: String!, password: String!): User!
    deleteUser(id: ID): User!
    updateUser(id: ID!, email: String, password: String): User!
  }

  input UserCreateInput {
    email: String!
    password: String!
  }

`;

const resolvers = {
	Query: {
		info: (_parent, _args, ctx: Context) => {
			return "Hello Worldie";
		},
		userById: (_parent, args, ctx: Context) => {
			return ctx.prisma.users.findOne({
				where: {
					id: Number(args.id),
				},
			});
		},
		users: (_, __, ctx: Context) => {
			return ctx.prisma.users.findMany();
		},
	},
	Mutation: {
		createUser: (parent, args, ctx: Context) => {
			return ctx.prisma.users.create({ data: args });
		},
		deleteUser: (parent, args, ctx: Context) => {
			return ctx.prisma.users.delete({
				where: {
					id: Number(args.id),
				},
			});
		},
		updateUser: (parent, args, ctx: Context) => {
			return ctx.prisma.users.update({
				data: {
					email: args.email,
					password: args.password,
				},
				where: {
					id: Number(args.id),
				},
			});
		},
	},
};

export const schema = makeExecutableSchema({ resolvers, typeDefs });
