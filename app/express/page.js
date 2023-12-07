import H2TitleComponent from "../components/title-component/h2title-component";
import Image from "next/image";
import styles from "./express.module.scss";
import Middleware from "../../public/middleware.png";
import ExpressGetPic1 from "../../public/expressGetPic1.png";
import ExpressGetPic2 from "../../public/expressGetPic2.png";
import ExpressGetPic3 from "../../public/expressGetPic3.png";
import ExpressGetPic4 from "../../public/expressGetPic4.png";
import ExpressGetPic5 from "../../public/expressGetPic5.png";
import ExpressGetPic6 from "../../public/expressGetPic6.png";
import ExpressPostPic1 from "../../public/expressPostPic1.png";
import ExpressPostPic2 from "../../public/expressPostPic2.png";
import ExpressPostPic3 from "../../public/expressPostPic3.png";
import H5TitleComponent from "../components/title-component/h5title-component";

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

        {/* GET メソッド */}
        <article>
          <H2TitleComponent h2Title="GET メソッド"></H2TitleComponent>
          <Image
            src={ExpressGetPic1}
            alt="expressPic"
            className={styles.expressPic}
          ></Image>
          <p>上記写真のようにタグをres.send( )に入れることも可能。</p>
          <hr></hr>
          <br></br>
          <Image
            src={ExpressGetPic2}
            alt="expressPic"
            className={styles.expressPic}
          ></Image>
          <p>そしてブラウザにres.send( )の内容が表示される。</p>
        </article>

        {/* POSTメソッド */}
        <article>
          <H2TitleComponent h2Title="POSTメソッド"></H2TitleComponent>

          <aside>
            <H5TitleComponent h5Title="サーバーサイド"></H5TitleComponent>
            <Image
            src={ExpressPostPic3}
            alt="expressPic"
            className={styles.expressPic}
          ></Image>
          </aside>

          <aside>
            <H5TitleComponent h5Title="クライエントサイド"></H5TitleComponent>
            <Image
            src={ExpressPostPic1}
            alt="expressPic"
            className={styles.expressPic}
          ></Image>
           <Image
            src={ExpressPostPic2}
            alt="expressPic"
            className={styles.expressPic}
          ></Image>
          </aside>
        </article>

        {/* Router */}
        <article>
          <H2TitleComponent h2Title="Router"></H2TitleComponent>
          <Image
            src={ExpressGetPic3}
            alt="expressPic"
            className={styles.expressPic}
          ></Image>
          <p>
            上記のように{`"/test"`}や{`"/test/login"`}
            など同じtestが増えていくと管理しにくい。
          </p>
          <Image
            src={ExpressGetPic4}
            alt="expressPic"
            className={styles.expressPic}
          ></Image>
          <p>
            そこでroutesフォルダ、そしてその中にtest.jsファイルを作成する。
            <br></br>そこに貼り付け、appをrouterに変更する。
          </p>
          <Image
            src={ExpressGetPic5}
            alt="expressPic"
            className={styles.expressPic}
          ></Image>
          <p>
            最後に元々のserver.jsにrequire(test.jsのパスを記載)して、app.useに共通であるパスの
            {`"/test"`}
            と共通以降はtestrouterを使用するのでtestrouterと記載したら完了。
          </p>
          <Image
            src={ExpressGetPic6}
            alt="expressPic"
            className={styles.expressPic}
          ></Image>
          <p>今後はこのように増やしていき管理することが可能！</p>
        </article>

        {/* ミドルウェア */}
        <article>
          <H2TitleComponent h2Title="ミドルウェア"></H2TitleComponent>
          <p>
            Express.jsにおけるミドルウェアとは、HTTPリクエストとレスポンスの間に挟まる処理を指す。
          </p>
          <p>
            Express.jsでは、app.use()
            関数を使用してミドルウェアを登録し、登録されたミドルウェアは、HTTPリクエストが発生するたびに呼び出される。
          </p>
          <Image
            src={Middleware}
            alt="middleware"
            className={styles.pic}
          ></Image>
          <p>
            このように、app.use() 関数に登録するミドルウェア関数には、req 、res
            、next という3つの引数が渡される。
          </p>
          <ul>
            <li>
              req はリクエストオブジェクト、res はレスポンスオブジェクト、next
              は次のミドルウェア関数へ処理を移すための関数。
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}
export default Express;
