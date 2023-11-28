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
            <H5TitleComponent h5Title="パッケージとdependency"></H5TitleComponent>
            <p>パッケージとはプログラムがたくさん入ったディレクトリ/フォルダーのようなものであり、NPM で公開されているほとんどのパッケージは外から使うためのライブラリである。世の中にあるパッケージを使えば自分で一からコードを書かなくとも高度な機能を実現することができる。</p>

            <p>
            パッケージを利用するとなったときに、「直接パッケージをダウンロードして自分のプロジェクトに含めればよいのではないか」、さらには「Git リポジトリに含めてよいのではないか」と思うかもしれない。しかし、もしそのパッケージに新しいバージョンが出て、バグ修正や機能の追加がされたとき、自分のプロジェクト内のパッケージもアップデートしたくなるかもしれない。そうすると自分のプロジェクト内のファイルを手動で更新しなければならなくなる。
            </p>
            <p>よって外部のパッケージは自分のプロジェクトに含めるのではなく、<b>「このプロジェクトは NPM のこのパッケージに依存している」、という依存情報だけを「宣言」するのがよいということに落ち着く。このような依存先のパッケージをこの界隈の言葉で dependency (depend=依存する)</b>と呼ぶ。NPM ではパッケージは別のパッケージに依存し、そのパッケージがまた別のパッケージに依存し...と、パッケージが dependency のネットワークを成すことになる。</p>
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
            <p>機能的に重要なのは <b>bin, main, dependencies, devDependencies, scripts </b>であり、それ以外はパッケージを公開するつもりがないならばあまり気にする必要はない。</p>
            <p>※package.json で指定できるすべての項目は<a href="https://docs.npmjs.com/cli/v10/configuring-npm/package-json" target="blank">ここ</a>で確認できる。</p>
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
              そのパッケージを外からインポートするときにどの JavaScript ファイルが入り口であるかを指定するもの(パッケージの中で最初に呼ばれるモジュール（ファイル）)
              </li>
              <li>自分のパッケージのpackage.jsonの main は、そのパッケージを NPM で公開しない限り重要ではない</li>
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
                <li>そのパッケージが依存する別のパッケージ</li>
                <li>package.json には dependency のパッケージ名とバージョンが書かれる</li>
              <li><b>実行(本番環境)に必要なパッケージ</b></li>
              <li>
                package.jsonがあるディレクトリでnpm
                installコマンドを実行すると、dependenciesとdevDependenciesに記述されたモジュールがnode_module内にインストールされる
              </li>
            </ul>
            <p>※あるパッケージ A を dependency としてインストールするときにデフォルトでは<b> A の dependencies はインストールされるが A の devDependencies はインストールされない。</b></p>
          </aside>

          <aside>
            <H5TitleComponent h5Title="devDependencies"></H5TitleComponent>
            <ul>
              <li>
              <b>開発やテストにのみ必要なパッケージ</b>
              </li>
            </ul>
          </aside>

          <aside>
            <H5TitleComponent h5Title="scripts"></H5TitleComponent>
            <ul>
                <li>scripts は簡単に言えばコマンドのエイリアスであり、任意のコマンドに名前をつけることができる。<br></br>エイリアス: あだ名 をカッコ付けて言ったのが「エイリアス」。コマンドや機能につける別名のこと。</li>
              <li>キーがイベント、値がコマンド</li>
              <li>
                startやtestなどの予約語以外を登録した場合はnpm run
                【コマンド名】として実行する。startは普通プログラムを実行するコマンドを指定し、npm startで、testはテストを実行するコマンドを普通指定し、npm testで実行できる
              </li>
            </ul>
          </aside>

          <aside>
            <H5TitleComponent h5Title="bin"></H5TitleComponent>
            <ul>
                <li>これも、パッケージを外から使うときにのみ重要になる項目</li>
              <li>パッケージ A の package.json の bin に何らかの実行可能ファイルが指定されていると、パッケージ A をインストールすればそれを CLI として実行できるようになる。</li>
            </ul>
          </aside>
        </article>

        {/* package-lock.jsonとは */}
        <article>
          <H2TitleComponent h2Title="package-lock.jsonとは"></H2TitleComponent>
          <ul>
            <li>dependency のバージョンを lock(ロック、固定)するためのファイルであり、npm installの実行時に自動的に作成される。</li>
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
