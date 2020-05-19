export const typeDefs = `

	type Query {
		info: String!
		user: User!
		users: [User!]!
		userById(id: ID!): User!
		userByEmail(email: String!): User!
		roundtable: Roundtable!
		roundtables: [Roundtable]!
		issues: [Issue]!	
		issue: Issue!	
		questions: [Question]!
		question: Question!
		responses: [Response]!
		response: Response!
	}

	type Mutation {
		createUser(email: String!, password: String): User!
		deleteUser(id: ID): User!
		updateUser(id: ID!, email: String, password: String): User!
		createRoundtable(roundtablename: String!, owner: ID!, description: String): Roundtable!
		deleteRoundtable(id: ID!): Roundtable!
	}
	
	input UserCreateInput {
		email: String!
		password: String!
	}

	type User {
		id: ID!
		email: String!
		password: String!
		createdAt: String!
		questions: [Question!]!
		issues: [Issue!]!
	}
	
	type Roundtable {
		id: ID!
		roundtablename: String!
		owner: User!
		createdAt: String!
		description: String!
	}

	type Issue{
		id: ID!
		author: User!
		title: String!
		roundtable: Roundtable!
		questions: [Question]!
	}

	type Response{
		id: ID!
		content: String!
		questionAuthor: User!
	}

	type Question{
		id: ID!
		questionAuthor: User!
		issue: Issue!
		response: [Response]!
	}
	`;
