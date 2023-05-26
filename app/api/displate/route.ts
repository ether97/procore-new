import { NextResponse } from "next/server";

import prisma from "../../libs/prismadb";

import getCurrentUser from "@/app/actions/getCurrentUser";

import { getPrice } from "@/app/utils/getPrice";

import displates from "../../json/data.json";
import { cache } from "react";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();

  const darthVader = await prisma.displateInfo.findMany({
    where: {
      title: "Darth Vader",
    },
  });

  const displateInfoId = darthVader[0].id;

  // const { img, title, category } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  const displate = await prisma.displate.create({
    data: {
      userId: currentUser.id,
      finish: "GLOSS",
      frame: "BLACK_WOOD",
      size: "MEDIUM",
      price: getPrice("MEDIUM", "GLOSS", "BLACK_WOOD"),
      info: displateInfoId,
    },
  });

  const userUpdate = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favoriteIds: {
        push: displate.id,
      },
    },
  });

  // await prisma.displateInfo.createMany({
  //   data: displates,
  // });

  return NextResponse.json({});
}

export const GET = cache(async (request: Request) => {
  const currentUser = getCurrentUser();

  console.log(request);

  const displates = await prisma.displateInfo.findMany();

  return NextResponse.json(displates);
});
