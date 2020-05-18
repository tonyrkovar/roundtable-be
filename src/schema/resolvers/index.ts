import * as User from "./User";
import * as Query from "./Query";

export const resolvers = {
	User,
	Query,
};

/* I'm saving this code to drop it in the proper files during refactor */

// export const resolvers = {
// 	Query: {
// 		info: (_parent, _args, ctx: Context) => {
// 			console.log(ctx.prisma);
// 			return "Hello Worldie";
// 		},
// 		userById: (_parent, args, ctx: Context) => {
// 			return ctx.prisma.users.findOne({
// 				where: {
// 					id: Number(args.id),
// 				},
// 			});
// 		},
// 		userByEmail: (parent, args, ctx: Context) => {
// 			return ctx.prisma.users.findOne({
// 				where: {
// 					email: args.email,
// 				},
// 			});
// 		},
// 		users: (_, __, ctx: Context) => {
// 			return ctx.prisma.users.findMany();
// 		},
// 		roundtables: (_parent, _args, ctx: Context) => {
// 			return ctx.prisma.roundtables.findMany();
// 		},
// 		roundtableByUserId: (_, args, ctx: Context) => {
// 			return ctx.prisma.roundtables.findOne({
// 				where: {},
// 			});
// 		},
// 	},
// 	Mutation: {
// 		createUser: (parent, args, ctx: Context) => {
// 			return ctx.prisma.users.create({ data: args });
// 		},
// 		deleteUser: (parent, args, ctx: Context) => {
// 			return ctx.prisma.users.delete({
// 				where: {
// 					id: +args.id,
// 				},
// 			});
// 		},
// 		updateUser: (parent, args, ctx: Context) => {
// 			return ctx.prisma.users.update({
// 				data: {
// 					email: args.email,
// 					password: args.password,
// 				},
// 				where: {
// 					id: Number(args.id),
// 				},
// 			});
// 		},
// 		createRoundtable: (parent, args, ctx: Context) => {
// 			console.log(args);
// 			const ownerID = Number(args.owner);
// 			return ctx.prisma.roundtables.create({
// 				data: {
// 					roundtablename: args.roundtablename,
// 					Users: {
// 						connect: { id: ownerID },
// 					},
// 				},
// 			});
// 		},
// 	},
// };
