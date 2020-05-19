import { Context } from "../../context";

export const owner = (parent, args, ctx: Context) => {
	return ctx.prisma.roundtable
		.findOne({
			where: {
				id: parent.id,
			},
		})
		.owner();
};

export const issues = (parent, _, ctx: Context) => {
	return ctx.prisma.roundtable
		.findOne({
			where: {
				id: parent.id,
			},
		})
		.issues();
};
