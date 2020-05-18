import { ApolloServer } from "apollo-server";
import { context } from "./context";
import { schema } from "./schema";

new ApolloServer({
	schema,
	context,
}).listen({ port: 4000 }, () => console.log("Listening on port 4000"));
