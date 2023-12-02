import H2TitleComponent from "../components/title-component/h2title-component";
import Image from "next/image";
import InstantiationPic from "../../public/instantiationPic.png";

export function Instantiation() {
  return (
    <>
      <h1>インスタンス化とは</h1>

      <section>
        {/* インスタンス化とは */}
        <article>
          <H2TitleComponent h2Title="インスタンス化とは"></H2TitleComponent>
          <p>
            オブジェクト指向なプログラミング言語で出てくる表現のひとつであり
            クラス（設計図）からインスタンス（実体）を作ること。
          </p>
          <ul>
            <li>
              オブジェクト指向プログラミング言語では
              <b>『クラス』、『インスタンス』、『オブジェクト』</b>
              の3つの用語が頻繁に登場する。
            </li>
            <li>
              <b>
                クラス:設計図、インスタンス:実際に作った物(クラスを実際に利用可能な状態にしたオブジェクト)、オブジェクト:モノ
              </b>
            </li>
          </ul>
        </article>
        {/* クラスとの違い */}
        <article>
          <H2TitleComponent h2Title="クラスとの違い"></H2TitleComponent>
          <p>クラスとは、何を持っているのか・何ができるかを決めたモノ。</p>
          <p>
            「たい焼きと焼き型」の例えでは、焼き型がクラスで、たい焼きがインスタンス。
          </p>
          <Image src={InstantiationPic} alt="instantiationPic"></Image>
          <p>
            <b>ある一つの焼き型を使えば、同じ形のたい焼きが次々と焼きあがる</b>
            。つまり焼き型こそが、たい焼きの「形」を決めている「ひな形」。焼き型はあくまで型でしかなく、たい焼きそのものと見間違える人はいない。でも、どんなたい焼きができるかは、焼き型を見れば分かる。
          </p>
        </article>
        参考記事
        <article>
          <H2TitleComponent h2Title="参考記事"></H2TitleComponent>
        </article>
      </section>
    </>
  );
}
