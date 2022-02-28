import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import React from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <h2>Welcome!</h2>
          <p>New to Magic: The Gathering? You can start by searching things like &quot;zombie&quot;, &quot;darksteel&quot;, &quot;elf&quot; or &quot;sword&quot;.</p>

          <Link href="/cards/myCards" passHref>
            <div className={styles.card}>
              <h2>Returning? &rarr;</h2>
              <p>Take a look at your cards here</p>
            </div>
          </Link>

          {/* <Link href="/cards/randomcards" passHref>
            <div className={styles.card}>
              <h2>Don&apos;t know where to start? &rarr;</h2>
              <p>Click here for some random cards</p>
            </div>
          </Link> */}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
