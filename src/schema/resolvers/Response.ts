import { Context } from "../../context";

export const responseAuthor = (parent, _, ctx: Context) => {
	return ctx.prisma.response
		.findOne({
			where: {
				id: parent.id,
			},
		})
		.responseAuthor();
};
