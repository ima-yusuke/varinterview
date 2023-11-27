import H2TitleComponent from "../components/title-component/h2title-component";
import H5TitleComponent from "../components/title-component/h5title-component";

function Portnumber() {
  return (
    <>
      <h1>ポート番号とは</h1>

      <section>
        {/* ポート番号とは */}
        <article>
          <H2TitleComponent h2Title="ポート番号とは "></H2TitleComponent>
          <ul>
            <li>
              TCP/IP通信において、
              コンピュータが通信に使用する<b>プログラムを識別</b>するための番号
            </li>
            <li>16ビットの整数であり、0番~65535番まである</li>
            <li>
              IPアドレスがあればネットワーク上の通信相手のコンピュータを一意に識別することができるが、該当コンピュータのどのプログラムに通信パケットを届けるかは、IPアドレスだけでは決定できない。どのプログラムに通信パケットを渡すのかを決定するためにポート番号を使用する。
            </li>
            <li>
              例: マンションの住所(「○○市○○町1丁目1番
              マンション名」)がIPアドレスにあたり、部屋番号(「○○○号室」)がポート番号。
            </li>
          </ul>

          <aside>
            <H5TitleComponent h5Title="ウェルノウンポート番号"></H5TitleComponent>
            <p>ポート番号のうち、特定のプロトコルで使用するように決められているもの。(メールの送受信は25など元々決まっているもの)</p>
            <p><b>0番~1023番</b>が該当する。</p>
            代表的なウェルノウン番号は<a href="https://it-biz.online/it-skills/port/" target="blank">こちら</a>
          </aside>

          <aside>
            <H5TitleComponent h5Title="登録ポート番号 (REGISTERED PORT)"></H5TitleComponent>
            <p>公式には予約されていないものの、一般的には特定のアプリケーションやサービスが利用。</p>
            <p><b>1024番~49151番</b></p>が該当する。
          </aside>

          <aside>
            <H5TitleComponent h5Title="ダイナミック/プライベートポート番号"></H5TitleComponent>
            <p>制約がないポート番号で、世界中の誰でも自由に設定することができる。</p>
            <p><b>49152番~65535番</b></p>が該当する。
          </aside>
        </article>

        {/* ポート番号＝プログラムの識別 */}
        <article>
            <H2TitleComponent h2Title="ポート番号＝プログラムの識別"></H2TitleComponent>
            <p>1つのコンピューターでできることは実に膨大。「メールを送受信する」「Webページを閲覧する」「ファイルの編集をする」等々。この「メールを送受信する」というプログラムと「Webページを閲覧する」というプログラムは<b>同じコンピューターでも別の部屋に存在している</b>のがコンピューターの基本の仕組み。(「メールを処理するAさん」は101号室に、「ファイル編集をするB」さんは102号室にいるような仕組みになっているので、ポート番号まで適切に記載していないとやりたいことができない。)</p>
        </article>
      </section>
    </>
  );
}
export default Portnumber;
