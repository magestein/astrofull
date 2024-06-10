# Astro + authjs + server action + react + vanilla + prisma

This project is intended to test some features of Astro, such as Astro actions with React and vanilla JavaScript. It also includes a small test with Prisma and Auth.js.

```sh
npm install

```

## Config oauth with google

Browsing to [Google Cloud Console](https://console.cloud.google.com/apis/credentials) and create "OAuth 2.0 Client IDs" Credentials

| Field                           | Content                                        |
| :------------------------------ | :--------------------------------------------- |
| `Authorized JavaScript origins` | http://localhost:4321                          |
| `Authorized redirect URIs`      | http://localhost:4321/api/auth/callback/google |

And save, also check "OAuth consent screen" and accept any screen

Rename the file .env.sample to .env and add:

```sh
GOOGLE_CLIENT_ID=***
GOOGLE_CLIENT_SECRET=***
```

also in .env you have to complete the AUTH_SECRET field. You can do this by copying the hash from https://generate-secret.vercel.app/32 or you can generate it yourself using the command on Mac "openssl rand -base64 32" or find a similar command for your OS.

`AUTH_SECRET=***`

## PRISMA

There is already a test model in /prisma/schema.prisma for User, you only need to run the following commands.

```sh
npx prisma migrate dev --name init

npx prisma generate

```

Then, using `npx prisma studio` in the console, you can manually add some users to the SQLite database.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── actions/
│   │   └── index.ts              //simple server actions
│   ├── components/
│   │   └── Multi.astro           //component with astro actions + vanilla JavaScript
│   │   └── MultiReact.jsx        //component with astro actions + React
│   │   └── PrismaReact.jsx       //component with astro actions + react + prisma
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro           // test simple astro action, enter any number, and it will be multiplied by 2 on the server.
│       └── prisma.astro          // test astro action + prisma
│       └── prismareact.astro     // test astro action + prisma + react
│       └── secret.astro          // test authjs
└── package.json
```

## 🏃🏻‍♂️ Run project

```sh
npm run dev

```
