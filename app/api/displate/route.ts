import { NextResponse } from "next/server";

import prisma from "../../libs/prismadb";

import getCurrentUser from "@/app/actions/getCurrentUser";

import { getPrice } from "@/app/utils/getPrice";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();

  const { img, title, category } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  const displate = await prisma.displate.create({
    data: {
      img,
      title,
      category,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(displate);
}
