import H2TitleComponent from "../components/title-component/h2title-component";
import H5TitleComponent from "../components/title-component/h5title-component";

function PackageJson() {
  return (
    <>
      <h1>package.jsonとは</h1>

      <section>
        {/* package.jsonとは */}
        <article>
          <H2TitleComponent h2Title="package.jsonとは"></H2TitleComponent>
          <ul>
            <li>
              Node.jsにおいてインストールするパッケージが記述されたファイル
            </li>
          </ul>

          <aside>
            <H5TitleComponent h5Title="パッケージとは"></H5TitleComponent>
            <p>
              プログラムの機能や目的に応じて、関連するファイルをまとめ、パッケージとして扱う。パッケージは大きく分けて2種類ある。
            </p>
            <H5TitleComponent h5Title="①ネイティブパッケージ"></H5TitleComponent>
            <p>
              ソースコードからコンパイルして作成されるパッケージのことで、利用者が自分でコンパイルする必要がある。
            </p>
            <H5TitleComponent h5Title="②バイナリパッケージ"></H5TitleComponent>
            <p>
              すでにコンパイルされたパッケージで、利用者が容易にインストールできる。
            </p>
          </aside>
        </article>

        {/* package.jsonの構成要素 */}
        <article>
          <H2TitleComponent h2Title="package.jsonの構成要素"></H2TitleComponent>

          <aside>
            <H5TitleComponent h5Title="name"></H5TitleComponent>
            <ul>
              <li>アプリ名。それ以外に特に意味はない値。</li>
            </ul>
          </aside>

          <aside>
            <H5TitleComponent h5Title="version"></H5TitleComponent>
            <ul>
              <li>アプリのバージョン。更新したら数値を自分で手動で変える。</li>
            </ul>
          </aside>

          <aside>
            <H5TitleComponent h5Title="private"></H5TitleComponent>
            <ul>
              <li>パッケージ公開の有無</li>
              <li>このプロパティがtrueの場合は公開ができない</li>
            </ul>
          </aside>

          <aside>
            <H5TitleComponent h5Title="description"></H5TitleComponent>
            <ul>
              <li>アプリの説明。それ以外に特に意味はない値。</li>
              <li>
                npm searchコマンドで表示されるため、パッケージの検索に役立つ
              </li>
            </ul>
          </aside>

          <aside>
            <H5TitleComponent h5Title="main"></H5TitleComponent>
            <ul>
              <li>
                npm run
                ~で起点となるファイル。明示的に使用する場合が殆どなのであまり利用しない。
              </li>
              <li>
                パッケージの中で最初に呼ばれるモジュール（ファイル）を指定する
              </li>
              <li>パッケージのルートディレクトリからの相対パスを指定する</li>
            </ul>
          </aside>

          <aside>
            <H5TitleComponent h5Title="homepage"></H5TitleComponent>
            <ul>
              <li>プロジェクトのHP(URL)を指定する</li>
              <li>プロジェクトにHPがある場合は指定すると良い</li>
            </ul>
          </aside>

          <aside>
            <H5TitleComponent h5Title="dependencies"></H5TitleComponent>
            <ul>
              <li>本番環境でも利用するパッケージやその依存関係が記述される</li>
              <li>例)reactなど</li>
              <li>
                package.jsonがあるディレクトリでnpm
                installコマンドを実行すると、dependenciesとdevDependenciesに記述されたモジュールがnode_module内にインストールされる
              </li>
            </ul>
          </aside>

          <aside>
            <H5TitleComponent h5Title="devDependencies"></H5TitleComponent>
            <ul>
              <li>
                開発環境やテスト環境で利用するパッケージやその依存関係が記述される
              </li>
              <li>例)eslintやjestなど</li>
            </ul>
          </aside>

          <aside>
            <H5TitleComponent h5Title="scripts"></H5TitleComponent>
            <ul>
              <li>スクリプトを実行するエイリアスコマンドを指定する</li>
              <li>キーがイベント、値がコマンド</li>
              <li>
                startやtestなどの予約語以外を登録した場合はnpm run
                【コマンド名】として実行する
              </li>
            </ul>
          </aside>

          <aside>
            <H5TitleComponent h5Title="bin"></H5TitleComponent>
            <ul>
              <li>コマンドとして実行したいファイルを指定する</li>
              <li>コマンド名とファイル名をマップする</li>
            </ul>
          </aside>
        </article>

        {/* package-lock.jsonとは */}
        <article>
          <H2TitleComponent h2Title="package-lock.jsonとは"></H2TitleComponent>
          <ul>
            <li>
              パッケージをインストールした時に新規作成・更新される(npm
              installコマンド実行時)
            </li>
            <li>
              実際にインストールしたパッケージ情報が記載されている(npm
              installコマンド実行時)
            </li>
            <li>
              node_modules の中に入っているモジュールのすべてが記載されている
            </li>
            <li>
              <b>直接編集してはいけない</b>
            </li>
            <li>基本的に無視していいファイル</li>
          </ul>
        </article>

        {/* 参考記事 */}
        <article>
          <H2TitleComponent h2Title="参考記事"></H2TitleComponent>
          参考記事は<a href="https://qiita.com/righteous/items/e5448cb2e7e11ab7d477" target="blank">こちら</a>
        </article>
      </section>
    </>
  );
}
export default PackageJson;
