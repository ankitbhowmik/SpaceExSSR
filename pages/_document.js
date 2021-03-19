import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document{
    render(){
        return(
            <Html lang="en">
                <Head>
                    <link rel="mainfest" href="/manifest.json"/>
                    <link rel="apple-touch-icon" href="/icon.png"></link>
                    <meta name="theme-color" content="#f1f1f1"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument;