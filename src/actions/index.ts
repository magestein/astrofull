import { defineAction, z } from "astro:actions";

export const server = {
  login: defineAction({
    accept: "form",
    input: z.object({
      numero: z.string(),
    }),
    //handler: async ({ numero }) => {
    handler: async (data) => {
      //convert data.numero to number
      console.log("data.name: ", data.numero);

      const mutlply = Number(data.numero) * 2;
      return mutlply;
    },
  }),
};
