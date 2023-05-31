import AWS from "aws-sdk";

const ImageUpload = () => {
  const uploadPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]!;
    const filename = file.name;
    const fileType = file.type;

    console.log("filename", filename, fileType);

    var credentials = {
      accessKeyId: process.env.S3_ACCESS_KEY as string,
      secretAccessKey: process.env.S3_SECRET_KEY as string,
    };
    AWS.config.update({ credentials: credentials, region: "us-east-1" });
    var s3 = new AWS.S3();

    var presignedGETURL = s3.getSignedUrl("getObject", {
      Bucket: process.env.BUCKET_NAME,
      Key: filename, //filename
      Expires: 100, //time to expire in seconds
    });

    // const res = await fetch(`/api/s3?file=${filename}&fileType=${fileType}`);
    // const { url } = await res.json();

    console.log(presignedGETURL);

    const upload = await fetch(presignedGETURL, {
      method: "PUT",
      body: file,
      headers: { "Content-Type": fileType },
    });

    if (upload.ok) {
      console.log("Uploaded successfully!");
    } else {
      console.error("Upload failed.");
    }
  };

  return (
    <input type="file" accept="image/png, image/jpeg" onChange={uploadPhoto} />
  );
};

export default ImageUpload;
