function Header() {
    return (
        <header>
        <div>
            <img src="/img/AFA.png" alt="AFA-Logo" />
            <h2>AFA動漫網</h2>
        </div>
        
        <nav>
            <button className="button"><a href="./vc.html">聲優專區</a></button>
            <button className="button"><a href="./manga.html">漫畫專區</a></button>
            <button className="button"><a href="./animax.html">動漫專區</a></button>
            <button className="button"><a href="https://www.ccpa.org.tw/tica/index.php?tpl=11">漫展資訊</a></button>
            <button className="button"><a href="./aboutus.html">關於我們</a></button>
        </nav>
    </header>
    )
}

export default Header
