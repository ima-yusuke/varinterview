import Link from "next/link";
import styles from "./nav.module.scss";

function Nav() {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="../../promsie" className={styles.link}>
                HOME
            </Link>
          </li>
          <li>
            <Link href="../../session" className={styles.link}>
              ログイン
            </Link>
          </li>
          <li>
            <Link href="../../nproblem" className={styles.link}>
              マイページ
            </Link>
          </li>
          <li>
            <Link href="../../nproblem" className={styles.link}>
              お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
