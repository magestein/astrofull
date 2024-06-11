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

  //POST
  create: defineAction({
    //accept: "form",
    input: z.object({
      title: z.string(),
      content: z.string(),
      slug: z.string().optional().nullable().default(null),
      isPublished: z.boolean(),
    }),
    handler: async ({ title, content, slug, isPublished }) => {
      const post = await prisma.post.create({
        data: {
          title,
          content,
          slug,
          isPublished,
        },
      });
      return post;
    },
  }),

  update: defineAction({
    accept: "form",
    input: z.object({
      id: z.string(),
      title: z.string(),
      content: z.string(),
      slug: z.string().optional().nullable().default(null),
      isPublished: z.boolean(),
    }),
    handler: async ({ id, title, content, slug, isPublished }) => {
      const post = await prisma.post.update({
        where: { id },
        data: {
          title,
          content,
          slug,
          isPublished,
        },
      });
      return post;
    },
  }),

  delete: defineAction({
    accept: "form",
    input: z.object({
      id: z.string(),
    }),
    handler: async ({ id }) => {
      const post = await prisma.post.delete({
        where: { id },
      });
      return post;
    },
  }),
};
