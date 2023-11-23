import styles from "./about-webpack.module.scss";
import Image from "next/image";
import webpackPic from "../../public/webpack.png";
import bundlePic from "../../public/bundlePic.png";
import H2TitleComponent from "../components/title-component/h2title-component";

function AboutWebpack() {
  return (
    <>
      <h1>Webpackについて</h1>

      <section>
        {/* Webpackとは */}
        <article>
          <H2TitleComponent h2Title="Webpackとは"></H2TitleComponent>
          <ul>
            <li>webpackとはモジュールバンドラ</li>
            <li>
              モジュールバンドラとは、
              複数のファイルを１つにまとめて出力してくれるツールのこと(複数ファイルをまとめることを「バンドル」と呼ぶ)
            </li>
            <li>
              JavaScriptファイルでないもの(CSSや画像など)をJavaScriptファイルへと変換できる「ローダ」と拡張機能を実装するための「プラグイン」も豊富にある
            </li>
            <Image
              alt="bundlePic"
              src={bundlePic}
              className={styles.firstPic}
            ></Image>
          </ul>
        </article>

        {/* なぜwebpackを使用するのか */}
        <article>
          <H2TitleComponent h2Title="なぜwebpackを使用するのか"></H2TitleComponent>

          <ul>
            <li>
              ウェブブラウザーとサーバ間では、HTTP/1.1という通信プロトコルで通信をしており、このHTTP/1.1では一度に処理できるリクエストの数が限られている。つまりリクエストが増えるとパフォーマンス（表示速度）が落ちてしまう
              <br></br>
              ⇒モジュールはできるだけ1つにまとめたほうがパフォーマンスが落ちない
            </li>
            <li>
              下記のような読み込みはパフォーマンスに悪く、読み込む順番にも注意
            </li>
            <Image
              src={webpackPic}
              alt="webpack"
              className={styles.secondPic}
            ></Image>
            <li>
              『開発するときには、なるべく機能を分けたい』、『実行するときは、なるべく機能をまとめたい』これらを解決するのがモジュールバンドラー
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}
export default AboutWebpack;
