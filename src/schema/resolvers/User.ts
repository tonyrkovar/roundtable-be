import { Context } from "../../context";

/* This code will be used once my typeDefs are fleshed out*/

export const questions = (parent, args, ctx: Context) => {
	return ctx.prisma.user
		.findOne({
			where: {
				id: parent.id,
			},
		})
		.questions();
};

export const issues = (parent, args, ctx: Context) => {
	return ctx.prisma.user
		.findOne({
			where: {
				id: parent.id,
			},
		})
		.issues();
};

export const memberOf = (parent, args, ctx: Context) => {
	return ctx.prisma.user
		.findOne({
			where: {
				id: parent.id,
			},
		})
		.memberOf();
};

export const roundtables = (parent, _, ctx: Context) => {
	return ctx.prisma.user
		.findOne({
			where: {
				id: parent.id,
			},
		})
		.roundtables();
};
