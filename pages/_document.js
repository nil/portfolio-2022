/* eslint-disable class-methods-use-this */
import React from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

// TODO: Import fonts

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* --- */}
        </Head>
        <body className="font-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
