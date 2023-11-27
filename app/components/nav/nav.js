import Link from "next/link";
import styles from "./nav.module.scss";

function Nav() {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="../../promsie" className={styles.link}>
              同期処理と非同期処理
            </Link>
          </li>
          <li>
            <Link href="../../session" className={styles.link}>
              CookieとSession
            </Link>
          </li>
          <li>
            <Link href="../../nproblem" className={styles.link}>
              N+1問題
            </Link>
          </li>
          <li>
            <Link href="../../app-router" className={styles.link}>
              app router
            </Link>
          </li>
          <li>
            <Link href="../../ssg-ssr" className={styles.link}>
              SSG・SSR
            </Link>
          </li>
          <li>
            <Link href="../../jwt" className={styles.link}>
              JWT
            </Link>
          </li>
          <li>
            <Link href="../../session-localstroage" className={styles.link}>
              session storage・local storage・Cookie
            </Link>
          </li>
        </ul>
      </nav>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="../../api" className={styles.link}>
              api
            </Link>
          </li>
          <li>
            <Link href="../../compo-name" className={styles.link}>
              Component命名法則
            </Link>
          </li>
          <li>
            <Link href="../../build-deploy" className={styles.link}>
            Compile・Build・Deploy
            </Link>
          </li>
          <li>
            <Link href="../../about-webpack" className={styles.link}>
             Webpack
            </Link>
          </li>
          <li>
            <Link href="../../agile-waterfall" className={styles.link}>
             アジャイル・ウォーターフォール開発
            </Link>
          </li>
          <li>
            <Link href="../../get-post" className={styles.link}>
             Get・Post
            </Link>
          </li>
          <li>
            <a href="https://spice-factory.co.jp/web/about-atmicdesign/" target="blank" className={styles.link}>
            アトミックデザイン(外部サイト)
            </a>
          </li>
        </ul>
      </nav>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="../../ip-dns" className={styles.link}>
              IPアドレス・DNS・ドメイン
            </Link>
          </li>
          <li>
            <Link href="../../portnumber" className={styles.link}>
              ポート番号
            </Link>
          </li>
          <li>
            <Link href="../../package-json" className={styles.link}>
              package.json
            </Link>
          </li>
          <li>
            <a href="https://webst8.com/blog/css-display/" className={styles.link} target="blank" >
              ブロック要素・インライン要素(外部サイト)
            </a>
          </li>
          <li>
            <a href="https://web-camp.io/magazine/archives/27339" className={styles.link} target="blank" >
              padding・margin(外部サイト)
            </a>
          </li>
          <li>
            <a href="https://youtu.be/UjSmGlJF-z4?si=LgL2rLmVyjEIKnBs" className={styles.link} target="blank" >
              position:relativeとabsolute(Youtube)
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
