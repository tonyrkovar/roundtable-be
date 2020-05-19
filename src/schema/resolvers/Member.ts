import { Context } from "../../context";

export const user = (parent, args, ctx: Context) => {
	return ctx.prisma.member.findMany({
		where: {},
	});
};
