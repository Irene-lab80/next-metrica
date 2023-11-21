import Head from "next/head";
import Image from "next/image";
import {Inter} from "next/font/google";
import Link from "next/link";
// import styles from "@/styles/Home.module.css";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  return (
    <>
      <Head>
        <title>Next js course</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className={`${styles.main} ${inter.className}`}>HELLO IT'S ME</main> */}
      <main className={``}>
        <h1>HELLO IT'S ME</h1>
        <ul>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/clients"}>Clients</Link>
          <Link href={"/portfolio"}>Portfolio</Link>
        </ul>
      </main>
    </>
  );
}
