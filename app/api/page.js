import styles from "./api.module.scss";
import Image from "next/image";
import apiPic from "../../public/api.webp";
import H2TitleComponent from "../components/title-component/h2title-component";
import H5TitleComponent from "../components/title-component/h5title-component";

function Api() {
  return (
    <>
      <h1>apiとは?</h1>

      <section>
        {/* apiとは */}
        <article>
          <H2TitleComponent h2Title="api(アプリケーション・プログラミング・インターフェース)とは"></H2TitleComponent>
          <Image src={apiPic} className={styles.pic}></Image>
          <ul>
            <li>
              わかりやすく言うと「アプリケーション同士を繋ぐもの」。2つのアプリケーションやソフトウェア同士が情報をやり取りする際に使用されるプログラミング上の窓口
            </li>
            <li>
              基本的なプロセスは「リクエスト（要求）」と「レスポンス（応答）」で構成される
            </li>
            <li>
              インターフェースとは、コンピュータ用語で言うと、「何か」と「何か」を繋ぐものという意味
            </li>
            <li>
              APIの利用には、「自分で開発する」パターンと「提供されているサービスを利用する」パターンがある
            </li>
            <li>
              APIを利用してアプリケーション間やシステム間でデータや機能を連携し、利用できる機能を拡張することを「API連携」、自社のAPIを連携してもらうために提供することを「API公開」と言う
            </li>
          </ul>
        </article>

        {/* apiの使用メリット */}
        <article>
          <H2TitleComponent h2Title="api使用のメリット"></H2TitleComponent>
          <ul>
            <li>
              既存アプリケーションの機能拡張を行う場合、要件定義を行った後に設計、開発、テストという段階を経て新機能をリリースするのが一般的
              <br></br> ➡
              APIが存在する場合、要件定義を行った後の設計、開発、テストの開発費用が大幅に削減できる
            </li>
            <li>
              他社サービスの情報を用いてログインできる機能などユーザーの利便性向上。例えばTwitterでログインしていればInstagramにTwitterのアカウント情報でログインできたりする
            </li>
          </ul>
        </article>

        {/* apiの代表的な種類 */}
        <article>
          <H2TitleComponent h2Title="apiの代表的な種類"></H2TitleComponent>

          <ul>
            <li>
              Web API(インターネットを経由して情報のやり取りが行われるAPI)
            </li>
            <li>OSが提供しているAPI</li>
            <li>ランタイム(プログラムを動かす環境)が提供しているAPI</li>
          </ul>
        </article>

        {/* Web apiの種類 */}
        <article>
          <H2TitleComponent h2Title="Web apiの種類"></H2TitleComponent>

          <ul>
            <li>
              Open
              API【公開】あるアプリケーションの機能や管理するデータ等を他のアプリケーションから呼び出して利用するための接続仕様・仕組みを指します。それを他の企業等に公開することをOpen
              APIという
            </li>
            <li>
              Partner
              API【限定公開】提供事業者が特定の提携企業との連携を目的に提供するAPI
            </li>
            <li>
              Closed
              API【非公開】自社の関係者以外には公開していない、企業内のみ利用を想定したAPI
            </li>
            <li>
              Composite
              API【サービスによる】複数のAPIを一つのAPIまたはメソッドで提供しているもの
            </li>
          </ul>
          <a
            href="https://cloudapi.kddi-web.com/magazine/api-types-and-protocols"
            target="blank"
          >
            ※詳細はこちら
          </a>
        </article>

        {/* apiの使い方 */}
        <article>
          <H2TitleComponent h2Title="apiの使い方"></H2TitleComponent>

          <ol>
            <li>
              APIを提供しているサービスに登録する(APIを利用するための審査に使われる可能性があり)
            </li>
            <li>
              OAPIキーとシークレットを取得。サービスに登録したら、APIキーとシークレットが発行される(これらはAPIを利用する際に必要)
            </li>
            <li>実装</li>
          </ol>
          <aside>
            <H5TitleComponent h5Title="apiキーとは"></H5TitleComponent>
            <ul>
              <li>APIサービスの提供事業者が独自に発行している認証情報</li>
              <li>APIを提供しているサービスへユーザー登録でキー取得可</li>
            </ul>
          </aside>
        </article>
      </section>
    </>
  );
}
export default Api;
