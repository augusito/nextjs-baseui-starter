import * as React from "react";
import { Block } from "baseui/block";

export const sum = (a: number, b: number) => a + b;

export default function Home() {
  return (
    <>
      <Block backgroundColor="backgroundSecondary" color={"contentPrimary"}>
        Hello Base Web!
      </Block>
    </>
  );
}
