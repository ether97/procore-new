import S3 from "aws-sdk/clients/s3";

import { NextResponse } from "next/server";

interface IParams {
  filename: string;
  fileType: string;
}

export async function GET(request: Request, { params }: { params: IParams }) {
  const { filename, fileType } = params;

  const s3 = new S3({
    signatureVersion: "v4",
    region: "us-east-2",
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
  });

  const preSignedUrl = await s3.getSignedUrl("putObject", {
    Bucket: process.env.BUCKET_NAME,
    Key: filename,
    ContentType: fileType,
    Expires: 5 * 60,
  });

  return NextResponse.json({ preSignedUrl });
}
