import H2TitleComponent from "../components/title-component/h2title-component";
import Image from "next/image";
import styles from "./express.module.scss";
import Middleware from "../../public/middleware.png";


function Express() {
  return (
    <>
      <h1>Expressとは</h1>

      <section>
        {/* Expressとは */}
        <article>
          <H2TitleComponent h2Title="expressとは"></H2TitleComponent>
          <ul>
            <li>Node.jsで利用できるWebアプリケーションフレームワーク</li>
          </ul>
        </article>

        {/* ルーティング */}
        <article>
          <H2TitleComponent h2Title="ルーティング"></H2TitleComponent>
          <p>
            Express.jsにおけるルーティングとは、HTTPリクエストのURLに応じて、アプリケーション内で実行する処理を決定する仕組み。Express.jsでは、app.【HTTPメソッド名】()
            関数を使用してルートを定義する。
          </p>
          <ul>
            <li>app.get()</li>
            <li>app.post()</li>
            <li>app.put()</li>
            <li>app.delete()</li>
          </ul>
        </article>

        {/* ミドルウェア */}
        <article>
          <H2TitleComponent h2Title="ミドルウェア"></H2TitleComponent>
          <p>Express.jsにおけるミドルウェアとは、HTTPリクエストとレスポンスの間に挟まる処理を指す。</p>
          <p>Express.jsでは、app.use() 関数を使用してミドルウェアを登録し、登録されたミドルウェアは、HTTPリクエストが発生するたびに呼び出される。</p>
          <Image src={Middleware} alt="middleware" className={styles.pic}></Image>
          <p>このように、app.use() 関数に登録するミドルウェア関数には、req 、res 、next という3つの引数が渡される。</p>
          <ul>
          <li>req はリクエストオブジェクト、res はレスポンスオブジェクト、next は次のミドルウェア関数へ処理を移すための関数。</li>
          </ul>
        </article>
      </section>
    </>
  );
}
export default Express;
