//include express module or package
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const port = 4000;

// Define your GraphQL schema
const typeDefs = gql`
    type EventType = ["workshop", "activity", "tech_talk"];
    type Permission = ["public", "private"];

    type Speaker = {
        name: String
    };

    type Event = {
        id: Number,
        name: String,
        event_type: EventType,
        permission: Permission,

        start_time: Number, // unix timestamp (ms)
        end_time: Number, // unix timestamp (ms)

        description: String, // a paragraph describing the event
        speakers: Speaker[], // a list of speakers for the event

        public_url: String, // a url to display for the general public
        private_url: String, // a url to display for hackers
        related_events: Number[] // a list ids corresponding to related events
    };

    // What the endpoints will return
    const TEndpointResponse = [TEvent] || [Array.of(TEvent)];
`;

//Create resolver functions for Query schema
const resolvers = {
    Query: {
        
    }
};

//Create instance of express
const app = express();

//Create an instance of Apollo Server
//const server = new ApolloServer({ typeDefs, resolvers });
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
});

//Apply the Apollo GraphQL middleware and set the path to /api
server.applyMiddleware({ app, path: 'https://api.hackthenorth.com/v3/graphql' });

app.get('/', (req, res) => res.send('Hello World'));
app.listen({ port }, () =>
    console.log(
    `Server running at http://localhost:${port}`
    )
);