"use server";

import { auth } from "@/auth";
import getSession from "@/lib/getSession";
import prisma from "@/lib/prisma";
import { UpdateProfileValues, updateProfileSchema } from "@/lib/validation";
import { revalidatePath } from "next/cache";

// To learn more about server actions, watch my YT tutorial: https://www.youtube.com/watch?v=XD5FpbVpWzk

export async function updateProfile(values: UpdateProfileValues) {
  // TODO: Get the currently authenticated user
  const session = await getSession();
  const userId = session?.user?.id;

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const { name } = updateProfileSchema.parse(values);

  // TODO: Update user

  await prisma.user.update({ where: { id: userId }, data: { name } });

  revalidatePath("/");
}
