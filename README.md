# hackernews-graphql-be

This is a sample GraphQL repo for practice using Node and Prisma.
Below is a list of helpful commands for properly using the functionality with [Prisma](https://www.prisma.io/).

## Available Scripts

In the project directory, you can run:

### `node src/index.js`

Runs the app in the development mode with a running GraphQL Playground.<br />
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

The server needs to be restarted if you make edits for them to take effect.<br />
You will also see any errors in the console.

### `npx prisma migrate save --experimental`

Creates an SQLite migration for the database.

### `npx prisma migrate up --experimental`

Executes the created migration against the database.

### `npx prisma generate`

Generates a Prisma Client based on the created data model that can be used for building queries.

### `npx prisma studio --experimental`

Runs the Prisma Studio database GUI for a visual representation of your database.
Open [http://localhost:5555](http://localhost:5555) to view it in the browser (**opens automatically**).
