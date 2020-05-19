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
