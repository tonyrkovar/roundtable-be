import { Context } from "../../context";

export const questions = (parent, args, ctx: Context) => {
	return ctx.prisma.issue
		.findOne({
			where: {
				id: parent.id,
			},
		})
		.questions();
};

export const author = (parent, _, ctx: Context) => {
	return ctx.prisma.issue
		.findOne({
			where: {
				id: parent.id,
			},
		})
		.issueAuthor();
};
