export const typeDefs = `
	type User {
		id: ID!
		email: String!
		password: String!
		createdAt: String!
	}

	type Roundtable {
		id: ID!
		roundtablename: String!
		ownder: ID!
		createdAt: String!
	}

	type Query {
		info: String!
		user: User!
		userById(id: ID!): User!
		userByEmail(email: String!): User!
		users: [User!]!
		roundtable: Roundtable!
		roundtables: [Roundtable]!
		roundtableByUserId(id: ID!): Roundtable
	}

	type Mutation {
		createUser(email: String!, password: String): User!
		deleteUser(id: ID): User!
		updateUser(id: ID!, email: String, password: String): User!
		createRoundtable(roundtablename: String!, owner: ID!): Roundtable!
	}

	input UserCreateInput {
		email: String!
		password: String!
	}
`;
