import "./globals.css";
import { Nunito } from "next/font/google";
import getCurrentUser from "./actions/getCurrentUser";

import Navbar from "./components/Navbar/Navbar";
import Toast from "./components/Toast";
import Head from "next/head";
import ClientOnly from "./components/ClientOnly";
import DisplateModal from "./components/DisplateModal";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: "Procore",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="" />
      </Head>
      <body className={font.className}>
        <ClientOnly>
          <Navbar currentUser={currentUser} />
          <Toast />
          <DisplateModal />
        </ClientOnly>
        <div className="flex flex-row items-center justify-center h-full w-full ">
          {children}
        </div>
      </body>
    </html>
  );
}