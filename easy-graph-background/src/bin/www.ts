const Koa = require('koa');
const { ApolloServer, gql } = require('apollo-server-koa');

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = new Koa();

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log('server ready at http://localhost:4000');
});
