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
              N+1問題とは
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
