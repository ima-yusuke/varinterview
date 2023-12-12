import H2TitleComponent from "../components/title-component/h2title-component";
import H5TitleComponent from "../components/title-component/h5title-component";
import Image from "next/image";
import styles from "./hash.module.scss";
import HashPic1 from "../../public/hashPic1.png";
import HashPic2 from "../../public/hashPic2.png";
import HashPic3 from "../../public/hashPic3.png";
import HashPic4 from "../../public/hashPic4.png";

function Hash() {
  return (
    <>
      <h1>ハッシュの仕方</h1>

      {/* 認証と許可 */}
      <article>
        <H2TitleComponent h2Title="認証と許可"></H2TitleComponent>
        <p>
          認証と認可は、セキュリティの重要な要素であり、しばしば一緒に使われるが、それぞれ異なる意味を持っている。
        </p>

        <aside>
          <H5TitleComponent h5Title="認証 (Authentication)"></H5TitleComponent>
          <p>
            認証は、ユーザーが誰であるかを確認するプロセス。一般的には、ユーザー名とパスワードの組み合わせを使用して、ユーザーが自分自身であると主張する身元を確認する。他の認証方法には、生体認証(指紋や顔認証など)、ワンタイムパスワード(OTP)、デバイス認証(スマートフォンやハードウェアトークン)などがある。
          </p>
        </aside>
        <aside>
          <H5TitleComponent h5Title="許可 (Authorization)"></H5TitleComponent>
          <p>
            認可は、認証されたユーザーがアクセスできるリソースや実行できる操作を決定するプロセス。例えば、あるユーザーは特定のファイルを閲覧できるかもしれないが、それを編集する権限はない。認可は、ユーザーの役割、グループメンバーシップ、アクセス制御リスト(ACL)などに基づいて決定される。
          </p>
        </aside>
      </article>

      {/* bcryptを使用してハッシュ化を行う */}
      <article>
        <H2TitleComponent h2Title="bcryptを使用してハッシュ化を行う"></H2TitleComponent>

        <aside>
          <H5TitleComponent h5Title="ハッシュ化"></H5TitleComponent>
          <p>①npm install bcryptでbcryptモジュールをインストール。</p>
          <p>
            ②下記functionでハッシュ化。hashPassword()のカッコの中にハッシュしたいパスワードを入れる。すると画像のターミナルのようにハッシュ化されたのが見れる。
          </p>
          <Image src={HashPic1} alt="hashPic" className={styles.pic}></Image>
          <p>実際にハッシュ化し、データベースに保存した例。</p>
          <Image src={HashPic2} alt="hashPic" className={styles.pic}></Image>
        </aside>

        <aside>
            <H5TitleComponent h5Title="ハッシュ値と一致かチェック方法"></H5TitleComponent>
            <p>まずemailが一致したobjectをデータベースから取得(この時点ではパスワードは未チェック)。このobjectが下記画像のresult。</p>
            <Image src={HashPic3} alt="hashPic" className={styles.pic}></Image>
            <p>データベースに保存されていたハッシュ化されたパスワードと今回inputで入力したパスワードが同じものかチェックしている。今回でいうlogin() functionの第一引数に『今回inputで入力したパスワード』、第二引数に『ハッシュ化されたパスワード』を入れることで確認できる。compareは2つのパスワードが一致した場合『true』を、不一致の場合『false』を返す。
            </p>
            <Image src={HashPic4} alt="hashPic" className={styles.pic}></Image>
        </aside>
      </article>
    </>
  );
}
export default Hash;
