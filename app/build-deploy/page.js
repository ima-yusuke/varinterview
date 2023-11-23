import H2TitleComponent from "../components/title-component/h2title-component";
import styles from "./build-deploy.module.scss";

function BuildDeploy() {
  return (
    <>
      <h1>Compile・Build・Deployの違い</h1>

      <section>
        {/* Compile(コンパイル)とは */}
        <article>
          <H2TitleComponent h2Title="①Compile(コンパイル)とは"></H2TitleComponent>
          <ul>
            <li>
              開発者が作ったソースコードをコンピューターが理解できるようにオブジェクトコードへ変換する
            </li>
            <li>
              ※ソースコード：プログラミング言語を用いて開発者によって人間の言葉で書かれたコードのこと
            </li>
            <li>
              ソースコードはあくまで人間が理解できるものであってコンピューターが理解するためには「オブジェクトコード（または、バイナリコード）」に変換する必要がある。その変換作業をコンパイルという
            </li>
            <li>
              ※コンパイル済みのソースコードのファイルは「オブジェクトファイル」と呼ぶ
            </li>
            <li>
              ※コンパイルを行うために使われるソフトウェアを「コンパイラ」と呼ぶ
            </li>
          </ul>
        </article>

        {/* Build(ビルド)とは */}
        <article>
          <H2TitleComponent h2Title="②Build(ビルド)とは"></H2TitleComponent>

          <ul>
            <li>
              ソースコード上に問題がないかどうかを解析を行った上で、問題がなければオブジェクトコードに変換し、複数のオブジェクトファイルを1つにまとめて実行可能なファイルを作成する作業
              (バラバラな複数のオブジェクトファイルを一つの実行ファイルとしてまとめ、実行できる状態にする)
            </li>
            <li>
              複数のファイルから構成されるプログラムの場合でも、最終的に1個のファイルに集約し実行される
            </li>
          </ul>
        </article>

        {/* Deploy(デプロイ)とは */}
        <article>
          <H2TitleComponent h2Title="③Deploy(デプロイ)とは"></H2TitleComponent>

          <ul>
            <li>
              ビルドされた実行ファイルをサーバー上に展開と配置を行い、作成したプログラムを実際に利用できるようにする
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}
export default BuildDeploy;
