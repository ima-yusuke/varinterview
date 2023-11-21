import styles from "./about-webpack.module.scss";
import Image from "next/image";
import webpackPic from "../../public/webpack.png";
import bundlePic from "../../public/bundlePic.png";

function AboutWebpack() {
  return (
    <div className={styles.div}>
      <div>
        <h1>Webpackについて</h1>

        {/* Webpackとは */}
        <section>
          <h2>【Webpackとは】</h2>
          <ul>
            <li>webpackとはモジュールバンドラ</li>
            <li>
              モジュールバンドラとは、
              複数のファイルを１つにまとめて出力してくれるツールのこと(複数ファイルをまとめることを「バンドル」と呼ぶ)
            </li>
            <Image alt="bundlePic" src={bundlePic} className={styles.firstPic}></Image>
            <li>JavaScriptファイルでないもの(CSSや画像など)をJavaScriptファイルへと変換できる「ローダ」と拡張機能を実装するための「プラグイン」も豊富にある</li>
          </ul>
        </section>

        {/* なぜwebpackを使用するのか */}
        <section>
            <h2>【なぜwebpackを使用するのか】</h2>
            <ul>
                <li>ウェブブラウザーとサーバ間では、HTTP/1.1という通信プロトコルで通信をしており、このHTTP/1.1では一度に処理できるリクエストの数が限られている。つまりリクエストが増えるとパフォーマンス（表示速度）が落ちてしまう<br></br>⇒モジュールはできるだけ1つにまとめたほうがパフォーマンスが落ちない</li>
                <li>下記のような読み込みはパフォーマンスに悪く、読み込む順番にも注意</li>
                <Image src={webpackPic} alt="webpack"></Image>
                <li>『開発するときには、なるべく機能を分けたい』、『実行するときは、なるべく機能をまとめたい』これらを解決するのがモジュールバンドラー

</li>
            </ul>
        </section>


      </div>
    </div>
  );
}
export default AboutWebpack;
