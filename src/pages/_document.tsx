import { Html, Head, Main, NextScript } from "next/document";
import Document, { DocumentContext } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link 
            rel="preload" 
            href="../assets/fonts/Poppins-Regular.woff2" 
            as="font" 
            type="font/woff2" 
            crossOrigin="anonymous" 
          />
        </Head>
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
