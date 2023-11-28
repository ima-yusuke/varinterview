import H2TitleComponent from "../components/title-component/h2title-component"
import H5TitleComponent from "../components/title-component/h5title-component"

function NpmNPM(){
    return(
        <>
            <h1>npmとNPMについて</h1>
            <p>NPM と名のつくものは実は 2つある。</p>

            {/* npmとは */}
            <article>
                <H2TitleComponent h2Title="npmとは"></H2TitleComponent>
                <p>Node.js に付属している、パッケージを操作するための CLI(コマンドラインインターフェイス; コマンドラインから実行できるプログラム)である。</p>
                <ul>
                    <li>Node.js のパッケージを管理するための CLI であり、パッケージを作成したり、NPM 上のパッケージをローカルにインストールしたり、自分のパッケージを NPM に公開したりと、Node.js の開発に欠かせないツールである。</li>
                    <li>Node.js をインストールすると自動的に npm もインストールされる。</li>
                </ul>
            </article>

            {/* NPMとは */}
            <article>
                <H2TitleComponent h2Title="NPMとは"></H2TitleComponent>
                <p>オンライン上のパッケージレジストリ、つまり世界中の開発者が作った Node.js のパッケージが集められた場所。</p>
                <ul>
                    <li>現時点で他の言語のものを含め世界最大のパッケージレジストリであり、主にブラウザ用のライブラリ、Node.js 用のライブラリが豊富に存在する。</li>
                    <li>NPM に登録されているパッケージは<a href="https://www.npmjs.com/" target="blank">公式サイト</a>でブラウジング、検索できる。</li>
                </ul>

                <aside>
                    <H5TitleComponent h5Title="利用注意点"></H5TitleComponent>
                    <p>誰でもパッケージを公開できるため安全であるという保証はないということである。特に業務レベルでパッケージを使う際には、その <b>dependency (そのパッケージが使用しているまた別のパッケージ)</b>を含めて本当に信頼できるかを吟味する必要がある。</p>
                    <p>ほとんどのパッケージは GitHub にソースコードが載せられているが、そのコードがそのまま NPM に登録されているという保証はどこにもなく、コードをチェックしたい場合は NPM から直接ダウンロードするべきである。</p>
                </aside>
            </article>
        </>
    )
}
export default NpmNPM