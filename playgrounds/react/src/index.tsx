import React from "react";

import { Button, Color, Text, Margin, Select } from "@ds.e/react";
import ReactDOM from "react-dom";
import "@ds.e/scss/lib/Button.css";
import "@ds.e/scss/lib/Margin.css";
import "@ds.e/scss/lib/Utilities.css";
import "@ds.e/scss/lib/global.css";

ReactDOM.render(
  <>
    <Button label="hello" />
    <Color hexCode="#000" />
    <Margin>
      <Text size="xs">This is some text</Text>
    </Margin>
    <Select options={[{ label: "hello", value: "xin chao" }]} />
  </>,
  document.querySelector("#root")
);
