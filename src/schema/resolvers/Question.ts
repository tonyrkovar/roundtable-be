import { Context } from "../../context";

export const author = (parent, _, ctx: Context) => {
	return ctx.prisma.question
		.findOne({
			where: {
				id: parent.id,
			},
		})
		.author();
};

export const responses = (parent, _, ctx: Context) => {
	return ctx.prisma.question
		.findOne({
			where: {
				id: parent.id,
			},
		})
		.responses();
};
