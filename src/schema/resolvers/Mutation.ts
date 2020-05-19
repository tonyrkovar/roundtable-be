import { Context, context } from "../../context";

export const createUser = (parent, args, ctx: Context) => {
	return ctx.prisma.user.create({ data: args });
};

export const updateUser = (parent, args, ctx: Context) => {
	return ctx.prisma.user.update({
		data: {
			email: args.email,
			password: args.password,
		},
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

export const createRoundtable = (parent, args, ctx: Context) => {
	console.log(args);
	return ctx.prisma.roundtable.create({
		data: {
			roundtablename: args.roundtablename,
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
