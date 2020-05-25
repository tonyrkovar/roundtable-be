import { Context, context } from "../../context";
import { roundtables } from "./Query";

// User Mutations
export const createUser = (parent, args, ctx: Context) => {
	console.log(args);
	return ctx.prisma.user.create(args);
};

export const updateUser = (parent, args, ctx: Context) => {
	return ctx.prisma.user.update({
		data: args.data,
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
			roundtableName: args.roundtableName,
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
			roundtableName: args.roundtableName,
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
			prompt: args.prompt,
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
			prompt: args.prompt,
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
			question: args.question,
		},
	});
};

export const updateQuestion = (_, args, ctx: Context) => {
	return ctx.prisma.question.update({
		where: {
			id: +args.id,
		},
		data: {
			question: args.question,
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

// Response Mutations

export const createResponse = (_, args, ctx: Context) => {
	return ctx.prisma.response.create({
		data: {
			responseAuthor: {
				connect: { id: +args.responseAuthor },
			},
			question: {
				connect: { id: +args.question },
			},
			content: args.content,
		},
	});
};

export const updateResponse = (_, args, ctx: Context) => {
	return ctx.prisma.response.update({
		where: {
			id: +args.responseId,
		},
		data: {
			content: args.content,
			question: {
				connect: { id: +args.question },
			},
			responseAuthor: {
				connect: { id: +args.responseAuthor },
			},
		},
	});
};

export const deleteResponse = (_, args, ctx: Context) => {
	return ctx.prisma.response.delete({
		where: {
			id: +args.id,
		},
	});
};

// Member Mutations

export const createMember = (_, args, ctx: Context) => {
	return ctx.prisma.member.create({
		data: {
			roundtable: {
				connect: { id: +args.roundtable },
			},
			user: {
				connect: { id: +args.user },
			},
		},
	});
};

export const removeMember = (_, args, ctx: Context) => {
	return ctx.prisma.member.delete({
		where: {
			id: +args.id,
		},
	});
};
