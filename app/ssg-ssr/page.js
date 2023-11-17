import styles from "./ssg-ssr.module.scss";
import Image from "next/image";
import ssgPic from "../../public/ssg.png";
import ssrPic from "../../public/ssr.png";
import Link from "next/link";

function SsgSsr() {
  return (
    <div className={styles.div}>
      <div>
        <h1>SSG ・SSRとは</h1>

        {/* SSGとは */}
        <section>
          <h2>【SSGとは】</h2>
          <ul>
            <li>
            スタティックサイトジェネレーションの略
            </li>
            <li>ビルド時にデータを取得し、HTMLの生成を行い、Webサーバー上にキャッシュ(いつでも出せるよう保管)させておく</li>
            <li>そしてユーザからリクエストを受けた時にキャッシュから生成しておいたHTMLを返却</li>
            <li>すでに生成済みのHTMLを返却するので、ページ表示速度が早い</li>
            <li>クローラーの読み取りが可能なので、SEOに強い ※詳細はこちらの記事を参考 <Link href="../../app-router">Googleクローラーについて</Link></li>
          </ul>
          <Image src={ssgPic} alt="ssgPic"></Image>
        </section>

         {/* SSRとは */}
         <section>
          <h2>【SSRとは】</h2>
          <ul>
            <li>
            サーバーサイドレンダリング
            </li>
            <li>リアルタイムなデータを表示できる</li>
            <li>サーバ上でデータの取得を行うので、ユーザのデバイススペックによらず、レンダリングができる</li>
            <li>あらかじめデータを取得した状態でHTMLが表示されるので、クローラーも読み取ることができる</li>
            <li>リクエストを受けてからHTMLの生成が始まるので、表示されるまでに若干時間がかかる</li>
            <li>クローラーの読み取りが可能なので、SEOに強い ※詳細はこちらの記事を参考 <Link href="../../app-router">Googleクローラーについて</Link></li>
          </ul>
          <Image src={ssrPic} alt="ssgPic"></Image>
        </section>
      </div>
    </div>
  );
}
export default SsgSsr;
