import Link from "next/link";
import styles from "./nav.module.scss";

function Nav() {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="../../promsie" className={styles.link}>
              同期処理と非同期処理の違い
            </Link>
          </li>
          <li>
            <Link href="../../session" className={styles.link}>
              CookieとSessionの違い
            </Link>
          </li>
          <li>
            <Link href="../../nproblem" className={styles.link}>
              N+1問題
            </Link>
          </li>
          <li>
            <Link href="../../app-router" className={styles.link}>
              app routerの特色
            </Link>
          </li>
          <li>
            <Link href="../../ssg-ssr" className={styles.link}>
              SSG・SSRとは
            </Link>
          </li>
          <li>
            <Link href="../../jwt" className={styles.link}>
              JWTとは
            </Link>
          </li>
          <li>
            <Link href="../../session-localstroage" className={styles.link}>
              session storage・local storage・Cookieの違い
            </Link>
          </li>
        </ul>
      </nav>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="../../api" className={styles.link}>
              apiとは
            </Link>
          </li>
          <li>
            <Link href="../../compo-name" className={styles.link}>
              Component命名法則
            </Link>
          </li>
          <li>
            <Link href="../../build-deploy" className={styles.link}>
            Compile・Build・Deployの違い
            </Link>
          </li>
          <li>
            <Link href="../../about-webpack" className={styles.link}>
             Webpackとは
            </Link>
          </li>
          <li>
            <a href="https://spice-factory.co.jp/web/about-atmicdesign/" target="blank" className={styles.link}>
            アトミックデザインとは
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
