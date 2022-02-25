import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import React from "react";

export default function Home() {
  return (
    <div className={styles.container}>


      <main className={styles.main}>

        {/* <h1 className={styles.title}>Magic: The Gathering Deck Builder</h1> */}

        <div className={styles.grid}>
          <p className={styles.textCard}>
            <h2>Welcome!</h2>
            <p>New to Magic: The Gathering? You can start by searching things like &quot;zombie&quot;, &quot;darksteel&quot;, &quot;elf&quot; or &quot;sword&quot;.</p>
          </p>

          <Link href="/cards/mycards" passHref>
            <p className={styles.card}>
              <h2>Returning? &rarr;</h2>
              <p>Take a look at your cards here</p>
            </p>
          </Link>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Don&apos;t know where to start? &rarr;</h2>
            <p>Click here for some random cards (needs a real link)</p>
          </a>

          {/*          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
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
