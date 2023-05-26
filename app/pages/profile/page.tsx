"use client";

import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();

  if (typeof window === "undefined") return null;

  if (session) {
    return <div className="w-full h-full">page</div>;
  }
  return (
    <div className="w-full h-full">
      <h1>Access Denied</h1>
    </div>
  );
};

export default Profile;
