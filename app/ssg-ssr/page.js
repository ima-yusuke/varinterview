import styles from "./ssg-ssr.module.scss";
import Image from "next/image";
import ssgPic from "../../public/ssg.png";
import ssrPic from "../../public/ssr.png";
import Link from "next/link";
import H2TitleComponent from "../components/title-component/h2title-component";

function SsgSsr() {
  return (
    <>
      <h1>SSG ・SSRとは</h1>

      <section>
        {/* SSGとは */}
        <article>
          <H2TitleComponent h2Title="SSGとは"></H2TitleComponent>
          <ul>
            <li>スタティックサイトジェネレーションの略</li>
            <li>
              ビルド時にデータを取得し、HTMLの生成を行い、Webサーバー上にキャッシュ(いつでも出せるよう保管)させておく
            </li>
            <li>
              そしてユーザからリクエストを受けた時にキャッシュから生成しておいたHTMLを返却
            </li>
            <li>すでに生成済みのHTMLを返却するので、ページ表示速度が早い</li>
            <li>
              クローラーの読み取りが可能なので、SEOに強い
              ※詳細はこちらの記事を参考{" "}
              <Link href="../../app-router">Googleクローラーについて</Link>
            </li>
          </ul>
          <Image src={ssgPic} alt="ssgPic" className={styles.pic}></Image>
        </article>

        {/* SSRとは */}
        <article>
          <H2TitleComponent h2Title="SSRとは"></H2TitleComponent>
          <ul>
            <li>サーバーサイドレンダリング</li>
            <li>リアルタイムなデータを表示できる</li>
            <li>
              サーバ上でデータの取得を行うので、ユーザのデバイススペックによらず、レンダリングができる
            </li>
            <li>
              あらかじめデータを取得した状態でHTMLが表示されるので、クローラーも読み取ることができる
            </li>
            <li>
              リクエストを受けてからHTMLの生成が始まるので、表示されるまでに若干時間がかかる
            </li>
            <li>
              クローラーの読み取りが可能なので、SEOに強い
              ※詳細はこちらの記事を参考{" "}
              <Link href="../../app-router">Googleクローラーについて</Link>
            </li>
          </ul>
          <Image src={ssrPic} alt="ssgPic" className={styles.pic}></Image>
        </article>
      </section>
    </>
  );
}
export default SsgSsr;
