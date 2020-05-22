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
		issueById(id: ID!): Issue!

		questions: [Question]!
		question: Question!
		questionById(id: ID!): Question!
		questionsByIssueId(id: ID!): [Question!]!

		responses: [Response]!
		response: Response!
		responseById(id: ID!): Response!

		member: Member!
		members: [Member!]!
		memberById(id: ID!): Member!
		membersByRTId(roundtableId: ID!): Member!
	}

	type Mutation {
		createUser(data: UserInput): User!
		deleteUser(id: ID): User!
		updateUser(id: ID!, data: UserInput): User!

		createRoundtable(roundtableName: String!, owner: ID!, description: String): Roundtable!
		deleteRoundtable(id: ID!): Roundtable!
		updateRoundtable(id: ID!, owner: ID, roundtableName: String, description: String): Roundtable!

		createIssue(issueAuthor: ID!, roundtable: ID!, title: String!, prompt: String): Issue!
		deleteIssue(id: ID!): Issue!
		updateIssue(id: ID!, title: String, prompt: String): Issue!

		createQuestion(author: ID!, issue: ID!, question: String!): Question!
		updateQuestion(id: ID!, question: String!): Question!
		deleteQuestion(id: ID!): Question!

		createResponse(content: String!, question: ID!, responseAuthor: ID!): Response!
		updateResponse(content: String!, question: ID!, responseAuthor: ID!, responseId: ID!): Response!
		deleteResponse(id: ID!): Response!

		createMember(roundtable: ID!, user: ID!): Member!
		removeMember(id: ID!): Member!
	}
	
	input UserInput {
		email: String!
		password: String
		firstName: String
		lastName: String
		userName: String
	}

	type User {
		id: ID!
		email: String!
		firstName: String!
		lastName: String!
		userName: String!
		password: String!
		createdAt: String!
		questions: [Question!]!
		issues: [Issue!]!
		roundtables: [Roundtable!]!
		memberOf: [Member!]!
	}
	
	type Roundtable {
		id: ID!
		roundtableName: String!
		owner: User!
		createdAt: String!
		description: String!
		issues: [Issue!]!
		members: [Member!]!
	}

	type Issue{
		id: ID!
		issueAuthor: User!
		prompt: String!
		title: String!
		roundtable: Roundtable!
		questions: [Question]!
	}

	type Response{
		id: ID!
		content: String!
		responseAuthor: User!
		question: Question! 
	}

	type Question{
		id: ID!
		author: User!
		question: String!
		issue: Issue!
		responses: [Response]!
	}

	type Member{
		id: ID!
		roundtable: Roundtable!
		user: User!
	}
	`;
