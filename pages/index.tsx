import * as React from "react";
import { Button } from "baseui/button";
import { useStyletron } from "baseui";

export const sum = (a: number, b: number) => a + b;

export default function Home() {
  const [css, theme] = useStyletron();
  return (
    <>
      <Button onClick={() => console.log("hey")}>Hello</Button>
      <p className={css({ color: theme.colors.accent600 })}>Styled by hook</p>
    </>
  );
}
