import { Context } from "../../context";
import { Z_ASCII } from "zlib";

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

export const issueById = (parent, args, ctx: Context) => {
	return ctx.prisma.issue.findOne({
		where: {
			id: +args.id,
		},
	});
};

// Question Queries
export const questions = (_, args, ctx: Context) => {
	return ctx.prisma.question.findMany();
};

export const questionById = (parent, args, ctx: Context) => {
	return ctx.prisma.question.findOne({
		where: {
			id: +args.id,
		},
	});
};

export const questionsByIssueId = (parent, args, ctx: Context) => {
	return ctx.prisma.question.findMany({
		where: {
			issue: { id: +args.id },
		},
	});
};

// Response Queries
export const responses = (_, args, ctx: Context) => {
	return ctx.prisma.response.findMany();
};

export const responseById = (parent, args, ctx: Context) => {
	return ctx.prisma.response.findOne({
		where: {
			id: +args.id,
		},
	});
};

export const memberById = (parent, args, ctx: Context) => {
	return ctx.prisma.member.findOne({
		where: {
			id: +args.id,
		},
	});
};

// Query Template
// export const roundtables = (_, args, ctx: Context) => {

// }
