import S3 from "aws-sdk/clients/s3";

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  console.log(request.query);
  const s3 = new S3({
    signatureVersion: "v4",
    region: "us-east-2",
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
  });

  const preSignedUrl = await s3.getSignedUrl("putObject", {
    Bucket: process.env.BUCKET_NAME,
    Key: request.query.file,
    ContentType: request.query.fileType,
    Expires: 5 * 60,
  });

  response.status(200).json({
    url: preSignedUrl,
  });
}
