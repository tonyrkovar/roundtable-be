import { Context } from "../../context";

// export const userById = (_parent, args, ctx: Context) => {
// 	return ctx.prisma.users.findOne({
// 		where: {
// 			id: Number(args.id),
// 		},
// 	});
// };

export const users = (_, args, ctx: Context) => {
	return ctx.prisma.user.findMany();
};
