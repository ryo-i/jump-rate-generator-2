import Head from 'next/head';
import Header from '../components/Header';
import Inner from '../components/Inner';
import Footer from '../components/Footer';
import Data from '../data/data.json';


const headerTitle = Data.header.title;
const headerText = Data.header.text;
const pageTitle = 'ジャンプ率ジェネレーター';
const pageText = '行長、行間、ジャンプ率などを変えてみてください。';


function Home() {
  return (
    <>
      <Head>
        <title>{ headerTitle }</title>
        <meta name="description" content={ headerText } />
        <meta property="og:title" content={ headerTitle } />
        <meta property="og:description" content={ headerText } />
      </Head>
      <Header />
      <main>
        <h1>{ pageTitle }</h1>
        <p dangerouslySetInnerHTML={{ __html: pageText }}></p>
        <Inner />
      </main>
      <Footer />
    </>
  )
}

export default Home;