import '../styles/globals.css';
import Head from 'next/head';
import Header from '../components/molecule/Header';
import Footer from '../components/molecule/Footer';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>wherehouse.io</title>
    </Head>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>
}

export default MyApp
