import Head from 'next/head';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Footer from '../components/Footer';
import Data from '../data/data.json';


const headerTitle = Data.header.title;
const pageTitle = 'このアプリについて';
const pageText = '文字の行長、行間、ジャンプ率を動的に変更した画面を確認することができます。';
const headTitle = pageTitle + ' | ' + headerTitle;


// Component
function About() {
    return (
        <>
        <Head>
            <title>{ headTitle }</title>
            <meta name="description" content={ pageText } />
            <meta property="og:title" content={ headTitle } />
            <meta property="og:description" content={ pageText } />
        </Head>

        <Header />
        <main>
            <h1>{ pageTitle }</h1>
            <p dangerouslySetInnerHTML={{ __html: pageText }}></p>
            <section>
                <h2>初期値</h2>
                <p>下記を推奨スタイルとして初期値にしています。</p>
                <ul>
                    <li>行長：35文字（ max-width: 35em; ）</li>
                    <li>行間：1.75倍（ line-height: 1.75em; ）</li>
                    <li>ジャンプ率：200%（ font-size: 2em; ）</li>
                </ul>
                <p>※参考：<a href="https://www.i-ryo.com/entry/2019/02/19/230354">【行長・行間・ジャンプ率】タイポグラフィ事始め（適度な箱組みとは）</a></p>
            </section>
            <Profile />
        </main>
        <Footer />
        </>
    );
}

export default About;