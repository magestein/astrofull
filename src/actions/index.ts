//src/actions/index.ts
import { defineAction, z } from "astro:actions";
import prisma from "../../lib/prisma";

export const server = {
  getUsers: defineAction({
    handler: async () => {
      const user = await prisma.user.findMany();
      console.log("user: ", user);
      return user;
    },
  }),

  login: defineAction({
    accept: "form",
    input: z.object({
      numero: z.string(),
    }),
    //handler: async ({ numero }) => {
    handler: async (data) => {
      //convert data.numero to number
      console.log("data.numero: ", data.numero);

      const mutlply = Number(data.numero) * 2;
      return mutlply;
    },
  }),
};
