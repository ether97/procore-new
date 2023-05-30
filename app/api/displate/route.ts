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

  const { specs, title } = body;
  const { price, frame, finish, size } = specs;
  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  const displateInfo = await prisma.displateInfo.findFirst({
    where: {
      title: title,
    },
  });

  if (!displateInfo) {
    throw new Error("title not found!");
  }

  const displate = await prisma.displate.create({
    data: {
      userId: currentUser.id,
      finish: finish,
      frame: frame,
      size: size,
      price: price,
      info: displateInfo.id,
    },
  });

  if (!displate) {
    throw new Error("error creating displate!");
  }

  const userUpdated = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favoriteIds: {
        push: displate.id,
      },
    },
  });

  if (!displate) {
    throw new Error("error updating user!");
  }

  // await prisma.displateInfo.createMany({
  //   data: displates,
  // });

  return NextResponse.json(userUpdated.favoriteIds);
}

export const GET = cache(async (request: Request) => {
  const currentUser = getCurrentUser();

  console.log(request);

  const displates = await prisma.displateInfo.findMany();

  return NextResponse.json(displates);
});
