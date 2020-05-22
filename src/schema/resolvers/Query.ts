import { Context } from "../../context";

// User Queries
export const users = (_, args, ctx: Context) => {
	return ctx.prisma.user.findMany();
};

export const userById = (_parent, args, ctx: Context) => {
	return ctx.prisma.user.findOne({
		where: {
			id: +args.id,
		},
	});
};

export const userByEmail = (_parent, args, ctx: Context) => {
	return ctx.prisma.user.findOne({
		where: {
			email: args.email,
		},
	});
};

// Roundtable Queries
export const roundtables = (_, args, ctx: Context) => {
	return ctx.prisma.roundtable.findMany();
};

export const roundtableById = (_, args, ctx: Context) => {
	return ctx.prisma.roundtable.findOne({
		where: {
			id: +args.id,
		},
	});
};

export const roundtablesByUserId = (_, args, ctx: Context) => {
	return ctx.prisma.roundtable.findMany({
		where: {
			owner: { id: +args.owner },
		},
	});
};

// Issue Queries
export const issues = (_, args, ctx: Context) => {
	return ctx.prisma.issue.findMany();
};

// Question Queries
export const questions = (_, args, ctx: Context) => {
	return ctx.prisma.question.findMany();
};

// Response Queries
export const responses = (_, args, ctx: Context) => {
	return ctx.prisma.response.findMany();
};

// Query Template
// export const roundtables = (_, args, ctx: Context) => {

// }
