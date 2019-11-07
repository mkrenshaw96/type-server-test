import 'reflect-metadata';
import { GraphQLServer } from 'graphql-yoga';
import typeDefs from './gql/typeDefs/index';
import resolvers from './gql/resolvers/index';
import { useContainer, useExpressServer } from 'routing-controllers';
import { Container } from 'typedi';

import { UserController } from './Controllers/UserController';

const msg = 'Pong';

const main = async () => {
	const server = new GraphQLServer({
		typeDefs,
		resolvers,
		context: () => {
			return {
				msg
			};
		}
	});
	await useContainer(Container);
	await useExpressServer(server.express, {
		routePrefix: '/rest',
		controllers: [UserController]
	});
	server.start({ playground: '/playground', port: 3000 }, () => console.log(`🚀 SERVER IS RUNNING ON 3000`));
};
main();
