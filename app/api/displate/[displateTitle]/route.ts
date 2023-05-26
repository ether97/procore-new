import { NextResponse } from "next/server";
import prisma from "../../../libs/prismadb";
import { cache } from "react";

interface IParams {
  displateTitle: string;
}

export const GET = cache(
  async (request: Request, { params }: { params: IParams }) => {
    console.log("params:", params);
    const { displateTitle } = params;

    const displates = await prisma.displateInfo.findMany({
      where: {
        category: displateTitle,
      },
    });

    return NextResponse.json(displates);
  }
);
