import { Context, context } from "../../context";
import { roundtables } from "./Query";

// User Mutations
export const createUser = (parent, args, ctx: Context) => {
	return ctx.prisma.user.create({ data: args });
};

export const updateUser = (parent, args, ctx: Context) => {
	return ctx.prisma.user.update({
		data: {
			email: args.email,
			password: args.password,
		},
		where: {
			id: +args.id,
		},
	});
};

export const deleteUser = (parent, args, ctx: Context) => {
	return ctx.prisma.user.delete({
		where: {
			id: +args.id,
		},
	});
};

// Roundtable Mutations
export const createRoundtable = (parent, args, ctx: Context) => {
	return ctx.prisma.roundtable.create({
		data: {
			roundtablename: args.roundtablename,
			description: args.description,
			owner: {
				connect: { id: +args.owner },
			},
		},
	});
};

export const deleteRoundtable = (_, args, ctx: Context) => {
	return ctx.prisma.roundtable.delete({
		where: {
			id: +args.id,
		},
	});
};

export const updateRoundtable = (parent, args, ctx: Context) => {
	return ctx.prisma.roundtable.update({
		where: {
			id: +args.id,
		},
		data: {
			description: args.description,
			roundtablename: args.roundtablename,
			owner: {
				connect: { id: +args.owner },
			},
		},
	});
};

// Issue Mutations

export const createIssue = (_, args, ctx: Context) => {
	return ctx.prisma.issue.create({
		data: {
			issueAuthor: {
				connect: { id: +args.issueAuthor },
			},
			roundtable: {
				connect: { id: +args.roundtable },
			},
			title: args.title,
		},
	});
};

export const deleteIssue = (_, { id }, ctx: Context) => {
	return ctx.prisma.issue.delete({
		where: {
			id: +id,
		},
	});
};

export const updateIssue = (_, args, ctx: Context) => {
	return ctx.prisma.issue.update({
		where: {
			id: +args.id,
		},
		data: {
			title: args.title,
		},
	});
};

// Question Mutations

export const createQuestion = (_, args, ctx: Context) => {
	return ctx.prisma.question.create({
		data: {
			author: {
				connect: { id: +args.author },
			},
			issue: {
				connect: { id: +args.issue },
			},
			prompt: args.prompt,
		},
	});
};

export const updateQuestion = (_, args, ctx: Context) => {
	return ctx.prisma.question.update({
		where: {
			id: +args.id,
		},
		data: {
			prompt: args.prompt,
		},
	});
};

export const deleteQuestion = (_, args, ctx: Context) => {
	return ctx.prisma.question.delete({
		where: {
			id: +args.id,
		},
	});
};
