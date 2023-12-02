import H2TitleComponent from "../components/title-component/h2title-component";
import styles from "./cors.module.scss";
import Image from "next/image";
import CorsPic from "../../public/cors-pic.png";
import CorsErrorPic from "../../public/corsErrorPic.png";
import CorsSolvePic from "../../public/cors-solve-pic.png";
function Cors(){

    return(
        <>
            <h1>CORSとは</h1>
            
            <section>

            {/* CORSとは */}
                <article>
                    <H2TitleComponent h2Title="CORSとは"></H2TitleComponent>
                    <Image src={CorsPic} alt="CorsPic"></Image>
                    <p>URLの構成を簡単に絵で表してみた。この中で<b>Protocol、Host、Port Numberの3つを合わせた部分がorigin</b></p>
                    <p>この3つが同じだったら<b>同じオリジン(same-origin)</b>、この3つの中で一つでも違ったら<b>違うオリジン(cross-origin)</b>です。つまり、<b>CORSは違うオリジン同士でもリソースを共有することという意味。</b></p>
                    <ul>
                        <li>「Cross-origin resource sharing」の略</li>
                    </ul>
                </article>

                {/* CORSとSOP */}
                <article>
                    <H2TitleComponent h2Title="CORSとSOP"></H2TitleComponent>
                    <p>ウェブの世界では違うオリジン同士のリソース共有に関するポリシーが2つある。1つはCORS、もう1つはSOP。</p>
                    <ul>
                        <li><b>SOPはSame-Origin Policyの略で、文字通りに同じオリジン同士だけリソース共有ができる</b>というポリシー。</li>
                    </ul>
                    <p>しかし、ウェブ世界で違うオリジンからリソースを持ってくることは頻繁に起こること(外部API使用など)なので完全に制限することは難しい。なのでいくつかの例外をおいて、その例外に該当する場合は違うオリジンでもアクセスを許可している。</p>
                    <p>その例外の中で1つが<b>CORSポリシーを守るリソースリクエスト</b>。</p>
                </article>

                {/* エラーの原因 */}
                <article>
                    <H2TitleComponent h2Title="エラーの原因"></H2TitleComponent>
                    <p>Access to XMLHttpRequest at 'http://localhost:3065/user' from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.</p>
                    <p>上記のようなエラーの原因を解説します。内容は<b>「http://localhost:3000からhttp://localhost:3065/userへ送ったアクセスがCORSポリシーによってブロックされた」</b>と書いてある。</p>
                    <Image src={CorsErrorPic} alt="CorsErrorPic"></Image>
                    <p><b>ポート番号が違う</b></p>
                    <p>クライアント側のポート番号が3000でバックエンド側のポート番号が3065なので違うオリジン。ここで既に<b>SOP違反してるのにCORSポリシーを守る処理も入れてないからブロックされちゃった</b>というシナリオ。</p>
                </article>

                {/* エラーの解決方法 */}
                <article>
                    <H2TitleComponent h2Title="エラーの解決方法"></H2TitleComponent>
                    <p>どうすればいいかはエラーメッセージが親切に教えてくれる</p>
                    <ul>
                        <li>No 'Access-Control-Allow-Origin' header is present on the requested resource</li>
                    </ul>
                    <Image src={CorsSolvePic} className={styles.pic} alt="CorsSolvePic"></Image>
                    <p>Access-Control-Allow-Originヘッダーがないと怒ってるので、それを入れれば良い。こうするとhttp://localhost:3000からのアクセスは許可するという意味になる。
                    </p>
                    <p>※ちなみにhttp://localhost:3000の代わりに*を書いたらすべてのオリジンからアクセスを許可する意味になる。開発してる時は楽だが、セキュリティ的に危ないのでやめたほうが良い。</p>
                </article>
            </section>
        </>
    )
}
export default Cors