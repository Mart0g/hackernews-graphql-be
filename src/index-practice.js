const { GraphQLServer } = require("graphql-yoga");

let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL",
  },
  {
    id: "link-1",
    url: "www.howtographql2.com",
    description: "Fullstack tutorial for GraphQL 2",
  },
];

let idCount = links.length;

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    link: (parent, args) => {
      const result = links.filter((link) => link.id === args.id);
      return result[0];
    },
    feed: () => links,
  },
  Mutation: {
    post: (parent, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      };
      links.push(link);
      return link;
    },
    updateLink: (parent, args) => {
      const linkIndex = links.filter((link) => link.id === args.id) || [];
      if (linkIndex[0]) {
        linkIndex[0].id = args.id;
        linkIndex[0].url = args.url || "";
        linkIndex[0].description = args.description || "";
      }
      return linkIndex[0] || null;
    },
    deleteLink: (parent, args) => {
      const removeIndex = links.map((link) => link.id).indexOf(args.id);
      ~removeIndex && links.splice(removeIndex, 1);
    },
  },
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
