import Link from "next/link";
import styles from "./nav.module.scss";

function Nav() {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/" className={styles.link}>
                HOME
            </Link>
          </li>
          <li>
            <Link href="../../login" className={styles.link}>
              ログイン
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.link}>
              マイページ
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.link}>
              お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
