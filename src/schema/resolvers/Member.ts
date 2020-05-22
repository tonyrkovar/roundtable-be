import { Context } from "../../context";

export const user = (parent, args, ctx: Context) => {
	return ctx.prisma.member
		.findOne({
			where: {
				id: parent.id,
			},
		})
		.user();
};

export const roundtable = (parent, args, ctx: Context) => {
	return ctx.prisma.member
		.findOne({
			where: {
				id: parent.id,
			},
		})
		.roundtable();
};
