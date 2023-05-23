import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { useSession } from "next-auth/react";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();
    console.log(session);
    // const { status } = useSession({
    //   required: true,
    // });

    if (!session?.user?.email) {
      return null;
    }

    return { ...session };
  } catch (error: any) {
    return null;
  }
}
