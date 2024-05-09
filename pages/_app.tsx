import '@/styles/globals.css';

import { AppProps } from 'next/app';
import { ScreenProvider } from '@/contexts/screen';
import { Analytics } from "@vercel/analytics/react";

if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  const React = require('react');
  const ReactDOM = require('react-dom');
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000, {});
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScreenProvider>
      <Component {...pageProps} />
    </ScreenProvider>
  );
}

export default MyApp;
