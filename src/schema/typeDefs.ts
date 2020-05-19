export const typeDefs = `

	type Query {
		info: String!

		user: User!
		users: [User!]!
		userById(id: ID!): User!
		userByEmail(email: String!): User!

		roundtable: Roundtable!
		roundtables: [Roundtable]!
		roundtableById(id: ID!): Roundtable!
		roundtablesByUserId(owner: ID!): [Roundtable!]!

		issues: [Issue]!	
		issue: Issue!	

		questions: [Question]!
		question: Question!

		responses: [Response]!
		response: Response!

		membersByRTId(roundtableId: ID!): Member!
	}

	type Mutation {
		createUser(email: String!, password: String): User!
		deleteUser(id: ID): User!
		updateUser(id: ID!, email: String, password: String): User!

		createRoundtable(roundtablename: String!, owner: ID!, description: String): Roundtable!
		deleteRoundtable(id: ID!): Roundtable!
		updateRoundtable(id: ID!, owner: ID, roundtablename: String, description: String): Roundtable!

		createIssue(issueAuthor: ID!, roundtable: ID!, title: String!): Issue!
		deleteIssue(id: ID!): Issue!
		updateIssue(id: ID!, title: String): Issue!

		createQuestion(author: ID!, issue: ID!, prompt: String!): Question!
		updateQuestion(id: ID!, prompt: String!): Question!
		deleteQuestion(id: ID!): Question!
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
		issues: [Issue!]!
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
		author: User!
		prompt: String!
		issue: Issue!
		response: [Response]!
	}

	type Member{
		roundtable: Roundtable!
		user: [User!]! 
	}
	`;
