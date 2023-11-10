import Image from "next/image";
import httpPic from "../../public/Http.webp";
import cookiesessionPic from "../../public/cookiesession.webp";
import cookiesession2Pic from "../../public/cookiesession2.webp";
import styles from "./session.module.scss";

function SessionCookiePage() {
  return (
    <>
      <h1>SessionとCookieの違いは?</h1>

      {/* Sessionとは */}
      <section>
        <h2>[Session]</h2>
        <ul>
          <li>セッションは「何をしたか？」という情報を取得する</li>
          <li>
            セッションとは、クライアントとサーバ間の通信の一連の流れを指す
            <ol>
              <li>クライアントとサーバ間でコネクションを確立</li>
              <li>クライアントがリクエストを送る</li>
              <li>サーバがレスポンスを返す</li>
              <li>コネクションを切断</li>
            </ol>
          </li>
        </ul>
      </section>

      {/* Cookieとは */}
      <section>
        <h2>[Cookie]</h2>
        <ul>
          <li>クッキーは「誰が」の情報を取得する</li>
        </ul>
      </section>

      {/* CookieとSessionが必要な理由 */}
      <section className={styles.reason}>
        <h2>[なぜCookieやSessionといった技術が必要か?]</h2>
        <ul>
          <li>
            HTTPが<span>「Stateless(ステートレス)」</span>という性質を持っているため
            <br></br>
            ※HTTPとは、インターネット上で広く使われているプロトコル(通信の決まりごと)で、一般的なWebサービスでは必ず使用される
          </li>
          <li>
            ステートレスとは、要は「状態を持たない」ということ。「状態を持たない」とはつまり、<span>「サーバーがクライアントの情報を保持し続けられない」</span>ことを意味している
          </li>
          <Image src={httpPic} className={styles.img}></Image>
          <li>
            HTTP通信では以前の状態を保持することができず、サーバー側が<span>「同一クライアントからのアクセスか否かを判定できない」</span>
          </li>
          <li>
            <span>「Cookie」「Session」は</span>HTTPが持つ「ステートレス」という性質を補填して<span>状態を保持させる(ステートフルにする)ために生まれた技術</span>
          </li>
        </ul>
        <aside>
          <Image src={cookiesession2Pic} className={styles.img}></Image>
          <Image src={cookiesessionPic} className={styles.img}></Image>
        </aside>
        <ol>
          <li>サーバーはアクセスしてきたユーザーにSession IDを付与する</li>
          <li>クライアントはブラウザのCookieにそのSession IDを保存する</li>
          <li>
            クライアントは次にリクエストを送るときに、そのSession
            IDをサーバーに渡す
          </li>
          <li>
            サーバーはそのSession IDによって「誰からのアクセスか」を認識できる
          </li>
          <li>
            サーバーはSession
            IDに紐づいた情報をSession情報保管場所(データベースなど)に保存する
          </li>
          <li>
            以上の手順でSession(ユーザーが行う一連の動作)管理を行うことで、HTTPのステートレス性を克服して、状態を保持することができる
          </li>
        </ol>
        <p><span>
          ※Session
          IDは、要はユーザーID(個人識別番号のようなイメージ！)のようなもので、それぞれのユーザーに固有の値が割り当てられる
          <br></br>
          → このIDがCookieに保存される 
          <br></br> 
          → 次回アクセス時にこのIDをサーバーに渡すことで誰からのアクセスか識別し、そのID紐づいたデータを返してくれる
        </span></p>
        <p><span>
        ※ブラウザ側で Session ID を保存する場所が Cookie となり、サーバ側で Session ID を保持する場所が Session になる
        </span></p>
      </section>
    </>
  );
}
export default SessionCookiePage;
