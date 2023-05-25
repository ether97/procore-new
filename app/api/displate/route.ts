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

  // await prisma.displateInfo.createMany({
  //   data: [
  //     {
  //       title: "Rex",
  //       img: "StarWars2",
  //       category: "Star Wars",
  //     },
  //     {
  //       title: "Darth Vader",
  //       img: "StarWars3",
  //       category: "Star Wars",
  //     },
  //     {
  //       title: "Darth Vader Black and White",
  //       img: "StarWars4",
  //       category: "Star Wars",
  //     },
  //   ],
  // });

  return NextResponse.json(displate);
}
