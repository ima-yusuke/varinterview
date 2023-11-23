import H2TitleComponent from "../components/title-component/h2title-component";
import styles from "./get-post.module.scss";

function GetPost() {
  return (
    <>
      <h1>GetとPostとは</h1>
      <p>
        ※クライアントとサーバーがやり取りする場合、
        <b className={styles.strong}>HTTP</b>
        で通信を行う。HTTPにはいくつかの仕様が取り決められており、GETとPOSTというのはその仕様で取り決められた、HTTPメソッドの一部のことを指している
      </p>
      <p>
        ※クライアントからサーバへの要求することを
        <b className={styles.strong}>リクエスト</b>
      </p>
      <p>
        ※サーバからブラウザへ応答することを
        <b className={styles.strong}>レスポンス</b>
      </p>
      <p>
        ※<b className={styles.strong}>リクエストパラメーター</b>
        :皆さんのパソコンからサーバーに送るデータのこと(ログイン画面に入力するメールアドレスやパスワードや注文画面に入力する名前や住所などの個人情報など)
        GetとPostの違いはサーバーへのリクエストパラメーターの送り方にある
      </p>

      <section>
        {/* Getとは */}
        <article>
          <H2TitleComponent h2Title="Getとは"></H2TitleComponent>
          <ul>
            <li>値をURLにくっつけてサーバに送る方法</li>
            <li>URLの後ろに渡す値が表示される</li>
            <li>サーバーからデータの取得を目的とする</li>
          </ul>
        </article>

        {/* Postとは */}
        <article>
          <H2TitleComponent h2Title="Postとは"></H2TitleComponent>

          <ul>
            <li>値を見えないところにくっつけてサーバに送る方法</li>
            <li>URLの後ろにはくっついておらずPOSTメソッドの方が安全</li>
            <li>サーバーにデータを送信する目的で使用</li>
          </ul>
        </article>

        {/* GET/POSTはどのように使い分ける? */}
        <article>
          <H2TitleComponent h2Title="GET/POSTはどのように使い分ける?"></H2TitleComponent>

          <ul>
            <li>
              画面表示のために必要なパラメーターは「GET」<br></br>
              例:表示したい商品や動画のID、ページ番号など
            </li>
            <li>
              ユーザーが画面に入力して送信するパラメーターは「POST」<br></br>
              例:ログインIDや個人情報など
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}
export default GetPost;
