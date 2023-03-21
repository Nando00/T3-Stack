import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const yoskiRouter = createTRPCRouter({
  bye: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        leaving: `Bye ${input.text}`,
      };
    }),
    getSecretMessage: protectedProcedure.query(() => {
        return "you can lick my nuts!";
      }),
});
