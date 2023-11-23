import H2TitleComponent from "../components/title-component/h2title-component";
import H5TitleComponent from "../components/title-component/h5title-component";
import styles from "./jwt.module.scss";

function Jwt() {
  return (
    <>
      <h1>JWTとは</h1>

      <section>
        {/* JWTとは */}
        <article>
          <H2TitleComponent h2Title="JWT(ジョット)とは"></H2TitleComponent>
          <ul>
            <li>
              JSON Web Tokenの略で<b>ユーザー認証</b>に使える
            </li>
            <li>
              何かしらのサービスにログインしたとき、その認証情報をもっておく必要があるが、
              その際のユーザー名やその有効期限などを JWT
              として保持しておくといった感じ
            </li>
            <li>
              トークンの一種であり、主にWebアプリケーションのセキュリティ技術として使われる
            </li>
            <li>
              通常のトークン形式の認証では、トークンの正当性を確認するためにサーバへの問い合わせが必要だが、JWT
              では『公開鍵』を利用してクライアント側でトークンの正当性を確認できる
              (セッション情報をサーバー側で管理せず、トークンを用いてクライアント側で管理するため、スケーラビリティが高くなる)
              <br></br>
              ※公開鍵はJWTの発行元(Issuer)からJWKという形式で公開されているケースが一般的
              <br></br>
              ※スケーラビリティとは規模の変化に、どれくらい柔軟に対応できるか、どれくらい拡張性があるか
            </li>
            <li>
              <b>『ヘッダ』、『ペイロード』、『署名』</b>の3つから成る
            </li>
            <li>
              『ヘッダ』は
              署名暗号の方式を記載するセクションで、署名のアルゴリズムなどを記載
            </li>
            <li>
              『ペイロード』は JWT
              の本体。このセクションには、アプリケーション側で任意の値を埋め込む
            </li>
            <li>
              『署名』セクションは JWT の正当性を保証するための署名セクション
            </li>
          </ul>
        </article>

        {/* ペイロードについて */}
        <article>
          <H2TitleComponent h2Title="ペイロードについて"></H2TitleComponent>

          <table border="1">
            <thead>
              <tr>
                <th>プロパティ</th>
                <th>名称</th>
                <th>内容</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>iss</td>
                <td>Issuer</td>
                <td>発行者の情報</td>
              </tr>
              <tr>
                <td>sub</td>
                <td>Subject</td>
                <td>テーマの情報</td>
              </tr>
              <tr>
                <td>aud</td>
                <td>Audience</td>
                <td>トークンの受信者のための識別子</td>
              </tr>
              <tr>
                <td>exp</td>
                <td>Expiration Time</td>
                <td>トークンの有効期限</td>
              </tr>
              <tr>
                <td>nbf</td>
                <td>Not Before</td>
                <td>トークンの開始日時</td>
              </tr>
              <tr>
                <td>iat</td>
                <td>Issued at</td>
                <td>トークンの発行日時</td>
              </tr>
              <tr>
                <td>jti</td>
                <td>JWT ID</td>
                <td>トークン自身の識別子</td>
              </tr>
            </tbody>
          </table>
        </article>

        {/* JWTによる認証の一例 */}
        <article>
          <H2TitleComponent h2Title="JWTによる認証の一例"></H2TitleComponent>
          <H5TitleComponent h5Title="ログイン前"></H5TitleComponent>
          <ol>
            <li>
              フロントエンドからユーザー情報(ID、パスワード等)をリクエスト
            </li>
            <li>バックエンドで受け取ったIDとパスワードの検証</li>
            <li>
              OKなら、秘密鍵でJWT発行(※認証されたユーザー情報と有効期限を含める)
            </li>
            <li>
              発行したJWTをHTTPレスポンスヘッダーのCookieに詰めてフロントエンドに返す
            </li>
            <li>フロントエンドでbase64で変換し、LocalStorageに保存</li>
            <li>ログインは完了</li>
          </ol>

          <H5TitleComponent h5Title="ログイン後"></H5TitleComponent>
          <ol>
            <li>フロントエンドでLocalStorageにトークンがあるか確認</li>
            <p>
              ・ある場合は、その有効期限を確認し、HTTPヘッダに入れてバックエンドにリクエスト
            </p>
            <p>
              ・ない場合は、ユーザーの種類によって適切なページへリダイレクト
            </p>
            <p>
              ・切れている場合は、バックエンドに問い合わせし、バックエンドでトークンを更新（リフレッシュ）して返す
            </p>
            <li>
              バックエンドで秘密鍵を使って、受け取ったJWTが改ざんされていないかチェック
            </li>
            <li>
              バックエンドでJWTの中身を確認して有効期限が切れていないかチェック
            </li>
            <li>
              バックエンドでOKならそのまま処理を継続、必要に応じてフロントエンドにデータを返す
            </li>
            <li>
              バックエンドでNGなら、認証エラーをフロントエンドにレスポンス
            </li>
          </ol>
        </article>
      </section>
    </>
  );
}
export default Jwt;
