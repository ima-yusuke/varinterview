import styles from "./app-router.module.scss";
import Image from "next/image";
import clientPic from "../../public/client-components.png";
import serverPic from "../../public/server-components.png";

function AppRouter() {
  return (
    <div className={styles.div}>
      <div>
        <h1>app routerの特色とは</h1>

        <p>
          Next.js13の非常に重要な仕組みである「Server Components」と「Client
          Components」について理解が必要
        </p>

        {/* Client Componentsとは */}
        <section>
          <h2>【Client Componentsとは】</h2>
          <ul>
            <li>
              JavaScriptの実行、HTML、CSSの組み立てがクライアントサイド(ユーザ側)で行われるコンポーネントを指す
            </li>
          </ul>
          <Image src={clientPic} alt="clientPic"></Image>
          <p>Client Componentsでは上の画像のようにアプリケーションが動作する</p>
          <p>
            ※Client
            Componentsはユーザ側(ブラウザ)でJavaScriptの実行、HTML、CSSの組み立てが行われるため、サイトパフォーマンスはユーザのデバイスや環境に依存してしまう
          </p>
        </section>

        {/* Server Componentsとは */}
        <section>
          <h2>【Server Componentsとは】</h2>
          <ul>
            <li>
              JavaScriptの実行、HTML、CSSの組み立てがサーバ上で行われるコンポーネントを指す
            </li>
            <li>
              Next.jsはサーバ機構を有しており、そのサーバでJavaScriptの実行、HTML、CSSの組み立てが可能になってる
              <br></br> ⇒
              ユーザ環境に依存しないサイトパフォーマンスの最適化が実現可能に！
            </li>
          </ul>
          <Image src={serverPic} alt="serverPic"></Image>
          <p>Server Componentsでは上の画像のようにアプリケーションが動作する</p>
        </section>

        {/* Server Components使うメリット */}
        <section>
          <h2>【Server Components使うメリット】</h2>
          <ul>
            <li>パフォーマンスが高い</li>
            <li>Googleのクローラーが認識できる</li>
            <li>SEOの向上につながる</li>
          </ul>
          <p>
            一般的にClient
            Componentsで構成されるアプリケーションをSPA(シングルページアプリケーション)と呼ぶ。SPAはGoogleのクローラーからは正確に認識されづらいというデメリットがある。Googleのクローラーに正確に認識されることによって、Googleなどの検索エンジンの検索結果で上位に表示されるようになるが、Googleのクローラーはせっかちなところがあるので、HTML、CSSの組み立てまでは待ってくれますが、JavaScriptで取得したデータを展開させるところまでは待ってくれない。
          </p>
          <p>
            ⇒Googleのクローラーはデータが入っていないHTMLをそのWebページのコンテンツとして認識するので、コンテンツが充実していないと判断し、検索結果で上位表示をしないようになってしまう
          </p>
        </section>

        {/* Server Componentsの生成が実行されるタイミング */}
        <section>
          <h2>【Server Componentsの生成が実行されるタイミング】</h2>
          <ol>
            <li>ビルド時</li>
            <li>一定時間経過後</li>
            <li>リクエスト時</li>
          </ol>
          <p>
            ※1のビルド時にデータを取得することを
            <b>Static Data Fetching</b>という
          </p>
          <p>
            ※ビルド時に生成したHTMLをユーザの画面上に表示することを
            <b>Static Rendering</b>という
          </p>
          <p>
            ※2の一定時間経過後にServer
            Componentsが生成されるようにするにはStatic Data
            Fetchingのオプションである<b>revalidate</b>を設定する必要がある
          </p>
          <p>
            ※3のリクエスト時にサーバ上でデータの取得を行うことを
            <b>Dynamic Data Ferching</b>という
          </p>
          <p>
            ※リクエスト時に生成したHTMLをユーザの画面上に表示することを<b>Dynamic
            Rendering</b>という
          </p>
        </section>
      </div>
    </div>
  );
}
export default AppRouter;
