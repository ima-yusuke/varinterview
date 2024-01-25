import H2TitleComponent from "../components/title-component/h2title-component";
import H5TitleComponent from "../components/title-component/h5title-component";
import styles from "./ip-dns.module.scss";
import Image from "next/image";
import DomainPic from "../../public/domain.jpg";
import DnsPic from "../../public/dns.jpg";
import IpPic from "../../public/ip.jpg";
import DnsRolePic from "../../public/dnsRole.png";

function IpDns() {
  return (
    <>
      <h1>IPアドレス・ドメイン・DNS</h1>

      <section>
        {/* IPアドレスとは */}
        <article>
          <H2TitleComponent h2Title="IPアドレスとは"></H2TitleComponent>
          <Image src={IpPic} className={styles.pic} alt="ippic"></Image>
          <ul>
            <li>Internet Protocol Addressの略</li>
            <li>
              現在のIPアドレスは「192.168.0.0」のようにピリオドによって4つのブロックに区切った数字
            </li>
            <li>
              ネットワークに繋がっている通信機器(プリンタやPC、スマホなど)に割り振られている識別番号の事で、その機器がネットワークのどこに存在しているかを示す為の「住所の役割」
            </li>
          </ul>
        </article>

        {/* IPアドレスの種類 */}
        <article>
          <H2TitleComponent h2Title="IPアドレスの種類"></H2TitleComponent>
          <p>用途や接続の仕方によってそれぞれ2種類に大別される</p>

          <aside>
            <H5TitleComponent h5Title="グローバルIP (パブリックIPアドレス)"></H5TitleComponent>
            <ul>
                <li>インターネットという世界規模のネットワーク内でユニークであるグローバルIPアドレス</li>
            </ul>
          </aside>

          <aside>
            <H5TitleComponent h5Title="プライベートIP (ローカルIPアドレス)"></H5TitleComponent>
            <ul>
                <li>社内ネットワークなどのLAN(ローカルネットワーク)内でユニークとなるプライベートIPアドレス (ローカルIPアドレスとも呼ばれる)</li>
                <li>そのネットワーク内で識別できれば良いので、他のネットワークでは同じ番号が使われている可能性がある</li>
            </ul>
          </aside>
        </article>

        {/* 接続の仕方による分類 */}
        <article>
            <H2TitleComponent h2Title="接続の仕方による分類"></H2TitleComponent>
            <p>IPアドレスには接続の仕方による分類もある。</p>
            <p>どちらの接続の仕方が最適か選択することになるが、アクセスされる事があるなら固定、アクセスするだけなら動的と理解するのが簡単。</p>

            <aside>
                <H5TitleComponent h5Title="動的IPアドレス"></H5TitleComponent>
                <ul>
                    <li>変動の可能性があるIPアドレスで一定時間が経過したり、接続をし直したりする度にIPアドレスが変わる</li>
                </ul>

            </aside>

            <aside>
                <H5TitleComponent h5Title="固定IPアドレス (静的IPアドレス)"></H5TitleComponent>
                <ul>
                    <li>変動しないIPアドレスで『静的IPアドレス』とも呼ばれる</li>
                </ul>
            </aside>
        </article>

        {/* IPアドレスを調べたい */}
        <article>
            <H2TitleComponent h2Title="IPアドレスを調べたい"></H2TitleComponent>
            <H5TitleComponent h5Title="グローバルIPアドレス"></H5TitleComponent>
            <p>アクセスしたら最初の画面で「あなたの利用しているIPアドレス」が表示されます</p>
            <p>※ここで表示されるのはグローバルIPアドレスです。</p>
            <a href="https://www.cman.jp/network/support/go_access.cgi" target="blank">IPアドレス検索</a>

            <H5TitleComponent h5Title="プライベートIPアドレス"></H5TitleComponent>
            <p>プライベートIPアドレスを調べたい場合、<a href="https://www.gate02.ne.jp/media/it/column_98/" target="blank">こちら</a>を参照ください。</p>
        </article>

        {/* IPアドレスの構造 */}
        <article>
            <H2TitleComponent h2Title="IPアドレスの構造"></H2TitleComponent>
            <p>人間用には10進数で192.168.0.0のように表示されるが、コンピューター用には2進数で11000000.10101000.00000000.00000000のように表される。</p>

            <aside>
                <H5TitleComponent h5Title="識別部分"></H5TitleComponent>
                <p>2進数に変換したIPアドレスは前半の「ネットワーク部」と後半の「ホスト部」に分けることができる。</p>
                <p>※ネットワーク部とホスト部がどこで区切られているのかを明確にする為には別途『サブネットマスク』という情報を参照する必要あり。</p>
                <ul>
                    <li>ネットワーク部は、そのIPアドレスが属しているネットワークを識別するための部分</li>
                    <li>ホスト部は、ネットワーク内のコンピュータを識別するための部分</li>
                </ul>
                <p>例）</p>
                <p>IPアドレス:192.168.0.12→11000000.10101000.00000000.00001100</p>
                <p>サブネットマスク:255.255.255.0→11111111.11111111.11111111.00000000</p>
                <p>この場合、サブネットマスクの1の部分が『ネットワーク部』で0の部分が『ホスト部』でIPアドレス12がホスト部になる。</p>
            </aside>

            <aside>
                <H5TitleComponent h5Title="クラスについて"></H5TitleComponent>
                <p>IPアドレスには、ネットワーク部とホスト部の割り当て桁数による「クラス」と呼ばれる考え方がある。クラスには「クラスA」~「クラスE」の5種類があり、ネットワークの規模や用途によって使い分ける。</p>
                <ul>
                    <li>クラスA (『0』で始まる): 1つのネットワークにたくさんのコンピュータを接続するような「大規模ネットワーク向け」</li>
                    <li>クラスB (『10』で始まる) :ネットワーク数とホスト数のバランスが取れているという特長から、ネットワーク数にもホスト数にも柔軟に対応する必要のある「中規模ネットワーク向け」 </li>
                    <li>クラスC (『110』で始まる): 各ネットワークのホスト数が最大254台に制限されるため「小規模ネットワーク向け」</li>
                    <li>クラスD (『1110』から始まる): マルチキャスト用のアドレス</li>
                    <li>クラスE (『1111』から始まる): 研究用のアドレスになる為、一般には割り与えられることはない</li>
                </ul>
            </aside>
        </article>

         {/* ドメインとは */}
         <article>
            <H2TitleComponent h2Title="ドメインとは"></H2TitleComponent>
            <Image src={DomainPic} className={styles.pic}  alt="ippic"></Image>
            <p>「ドメイン」とは、簡単に言えば「インターネット上の住所」。この住所はもちろんIPアドレスで示すこともできる。ただ、例えば「183.181.99.1」と数字で示されても覚えられないし、Webサイトを置くサーバーを変更したら、IPアドレスも変わってしまう。そこで、<b>より分かりやすく運用するために、IPアドレスを「wis-works.jp」といった文字列へと置き換えており、この文字列を、ドメインという。</b>
            </p>
            <p>ドメインのうち、「.」の右側文字列「com」「net」「jp」などは、<b>「トップレベルドメイン(TLD)」</b>という</p>
        </article>

        {/* DNSとは */}
        <article>
            <H2TitleComponent h2Title="DNSとは"></H2TitleComponent>
            <Image src={DnsPic} className={styles.pic} alt="ippic"></Image>
            <p>自社のWEBサイト用にドメインを取得したところで通信はIPアドレス同士で行うものなので、そのドメインが含まれるURLを叩いたところでどこにもアクセスは出来ない。そこで必要になるのがこの<b>ドメインに紐づくIPアドレスはこれだと紐づける設定をしておく作業である。その設定を登録しておくのがDNS(Domain Name System)。</b></p>

            <Image src={DnsRolePic} className={styles.picSmall}  alt="ippic"></Image>
            <p>「http://www.sample.co.jp」と入れて、該当Webコンテンツを表示させる裏側で、実は皆さんのPCは、「文字ではどこか分からないから、IPアドレスで教えて」とDNSに依頼をかけている。
            </p>
            <p>と言っても、ある特定のDNSサーバーが、世界中のドメイン名とIPアドレスの対応情報(住所録)を全て管理しているなどといった、単純な仕組みではありません。「jpドメインの情報を保持するDNSサーバー」「co.jpドメインの情報を保持するDNSサーバー」……などと、情報はドメインの階層ごとに<b>独立・分散</b>しています。</p>

            <p>上記写真の場合、 </p>
            <p><b>①まずIPアドレスでサイトを見つけたいがIPアドレスが分からない</b></p>
            <p><b>②そこでURLを使ってDNSにIPアドレスを聞く</b></p>
            <p><b>③いくつかの段階を経てゲットしたIPアドレスをDNSが返してくれる</b></p>
            <p><b>④クライアントはそのIPアドレスを使用しURL(http://www.sample.co.jpなど)を運営しているWEBサーバーにアクセスし、ホームページを表示させることができる</b></p>
           
        </article>

        {/* まとめ */}
        <article>
            <H2TitleComponent h2Title="まとめ"></H2TitleComponent>
            <ul>
                <li>IPアドレスはコンピューター用の住所 (183.181.99.1など)</li>
                <li>ドメインは人間用の住所 (http://www.sample.co.jpなど)</li>
                <li>DNSはこのIPアドレスとドメインを紐付ける役割 (http://www.sample.co.jpは183.181.99.1のことだなと変換し認識する)<br></br>※ドメイン名をIPアドレスに変換する</li>
            </ul>
        </article>

      </section>
    </>
  );
}
export default IpDns;
