"use client";

import axios from "axios";

import { toast } from "react-hot-toast";

const ImageUpload = () => {
  const uploadPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]!;
    const filename = file.name;
    const fileType = file.type;

    console.log(file, filename, fileType);
    const res = await axios(
      `/api/upload?file=${filename}&fileType=${fileType}`
    );
    const { url } = await res.data;

    const config = {
      headers: {
        "Content-Type": fileType,
      },
    };

    const upload = await axios.put(url, file, config);
    if (upload.status === 200) {
      console.log("Uploaded successfully!");
    } else {
      console.error("Upload failed.");
    }

    const s3FileUrl = `https://<nextjspractice>.s3.us-east-2.amazonaws.com/${filename}`;
    console.log("file url: ", s3FileUrl);
  };

  return (
    <input type="file" accept="image/png, image/jpeg" onChange={uploadPhoto} />
  );
};

export default ImageUpload;
