import styles from "./about-webpack.module.scss";
import Image from "next/image";
import webpackPic from "../../public/webpack.png";
import bundlePic from "../../public/bundlePic.png";
import H2TitleComponent from "../components/title-component/h2title-component";
import YotubePic1 from "../../public/Youtube1.png"; 
import YotubePic2 from "../../public/Youtube2.png"; 

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
            <li>例: <b>学校で先生が生徒からプリント回収する。この時にもし一人一人先生が回収していたら時間がかかる⇒そこで『生徒リーダー』に回収してもらいまとめて先生に渡すと先生は生徒一人とやり取りするだけでいいので手間が減る。この生徒リーダーの役割がwebpack、先生がサーバー。</b></li>
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

      {/* 使い方 */}
        <article>
          <H2TitleComponent h2Title="使い方"></H2TitleComponent>
          <ul>
            <li>npx webpack (これで『dist』というフォルダが作成されてそこに『main.js』というファイルができる)</li>
            <li>『webpack.config.js』というファイルを作成すると様々なカスタマイズができる。</li>
            <li>『entry』は何をバンドルするのかを指示する所</li>
            <li>『output』の『path』はどこに、ファイルを出力するか指示する所<br></br>※ 『{"${__dirname}"} 』は今の作業中の大元のフォルダ名を指す</li>
            <li>『output』の『filename』は出力されるファイルの名前を指示する所</li>
          </ul>
          <Image src={YotubePic1} className={styles.thirdPic}></Image>
          <Image src={YotubePic2} className={styles.thirdPic}></Image>
        </article>

        {/* 参考になるYoutube解説動画 */}
        <article>
          <H2TitleComponent h2Title="参考になるYoutube解説動画"></H2TitleComponent>
          <iframe width="100%" height="500" src="https://www.youtube.com/embed/CV0mTZNoLXQ?si=_OjhHQWkf-XGMa0j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </article>
      </section>
    </>
  );
}
export default AboutWebpack;
