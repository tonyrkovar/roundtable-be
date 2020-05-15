import { makeExecutableSchema } from "graphql-tools";

import { Context } from "../context";

export const resolvers = {
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
		roundtables: (_parent, _args, ctx: Context) => {
			return ctx.prisma.roundtables.findMany();
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
		createRoundtable: (parent, args, ctx: Context) => {
			return ctx.prisma.roundtables.create({ data: args });
		},
	},
};
