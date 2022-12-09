import * as React from "react";
import App from "next/app";
import type { AppProps } from "next/app";
import { Provider as StyletronProvider } from "styletron-react";
import { DarkTheme, BaseProvider } from "baseui";
import { styletron } from "../styletron";

export default class MyApp extends App {
  constructor(props: AppProps) {
    super(props);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <StyletronProvider value={styletron}>
        <BaseProvider theme={DarkTheme}>
          <Component {...pageProps} />
        </BaseProvider>
      </StyletronProvider>
    );
  }
}
