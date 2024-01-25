import H2TitleComponent from "../components/title-component/h2title-component";
import Image from "next/image";
import ErPic1 from "../../public/erPic1.PNG";
import ErPic2 from "../../public/erPic2.PNG";
import ErPic3 from "../../public/erPic3.PNG";
import ErPic4 from "../../public/erPic4.PNG";
import ErPic5 from "../../public/erPic5.PNG";
import ErPic6 from "../../public/erPic6.PNG";
import ErPic7 from "../../public/erPic7.PNG";
import styles from "./er.module.scss";
import H5TitleComponent from "../components/title-component/h5title-component";

function Er() {
  return (
    <>
      <h1>ER図(テーブル設計)</h1>

      <section>
        {/* リレーション */}
        <article>
          <H2TitleComponent h2Title="リレーション"></H2TitleComponent>
          <ul>
            <li>リレーションとはテーブル同士の関係のこと</li>
            <li>リレーションは３つある</li>
            <li>
              <b>①1:n</b>
            </li>
            <li>
              <b>②n:n</b>
            </li>
            <li>
              <b>③1:1</b>
            </li>
          </ul>
          <aside>
            <p>①1:n</p>
            <Image src={ErPic1} alt="erpic" className={styles.pic}></Image>
            <p>
              一つの会社に対して複数の社員が考えられる。実際は社員ゼロでも問題なし。
            </p>
            <hr></hr>
            <br></br>
          </aside>
          <aside>
            <p>②n:n</p>
            <Image src={ErPic2} alt="erpic" className={styles.pic}></Image>
            <p>
              社員はサークルに複数入れる、サークルは社員を複数かかえれる。
              <br></br>
              <b>※中間テーブルが必要</b>
            </p>
            <hr></hr>
            <br></br>
          </aside>
          <aside>
            <p>③1:1</p>
            <Image src={ErPic3} alt="erpic" className={styles.pic}></Image>
            <p>1人の社員に対して1つの個人情報。</p>
            <hr></hr>
            <br></br>
          </aside>
        </article>

        {/* 正規化 */}
        <article>
          <H2TitleComponent h2Title="正規化"></H2TitleComponent>
          <ul>
            <li>
              <b>データの繰り返しをなくすこと</b>
            </li>
          </ul>

          <aside>
            <H5TitleComponent h5Title="正規化のやり方"></H5TitleComponent>
            <ul>
              <li>
                <b>
                  横方向の繰り返しをなくす<br></br>⇒縦に並べる
                </b>
              </li>
              <li>
                <b>
                  縦方向の繰り返しをなくす<br></br>⇒1:nのテーブルに切り出す
                </b>
              </li>
            </ul>
            <p>
              注文番号0001の人は商品A, C, Dの3つ購入<br></br>
              ⇒これを下のテーブルのように縦書きに変える
            </p>
            <Image src={ErPic4} alt="erpic" className={styles.pic}></Image>
            <p>
              次に上の写真で青色のとこ以外縦に情報が同じで重複してる。（3つ購入したら住所Aも3つ同じのがきてたりする）
              <br></br>
              ⇒下記の画像のように青のとこだけ抜き出し注文番号で左のテーブルと紐づけるようにする
            </p>
            <p>※1つの注文番号に対して複数の注文した商品がある1:nの関係</p>
            <Image src={ErPic5} alt="erpic" className={styles.pic}></Image>
            <p>さらに修正して最終こうなる</p>
            <p>※ユーザー情報もまとめて別テーブル<br></br>※商品情報もまとめて別テーブル<br></br>※ここでも1:nの関係</p>
            <Image src={ErPic6} alt="erpic" className={styles.pic}></Image>
            <p>左上のshopsとその下に繋がってるitems。一つの店に複数の商品があるので1:n。<br></br><b>こういう場合n側にshop_idなどidをつける。このn側のキーを外部キー、1側を主キーという。</b></p>
            <Image src={ErPic7} alt="erpic" className={styles.pic}></Image>
            <p>同様に右上のusersとpurchase histories 。1人のユーザーに対して複数の購入履歴が考えられるので<b>1:n</b>。こちらも<b>n側に新たにid を追加。</b></p>
          </aside>
        </article>
      </section>
    </>
  );
}
export default Er;
