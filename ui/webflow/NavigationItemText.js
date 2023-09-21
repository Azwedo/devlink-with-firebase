import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NavigationItemText.module.css";

export function NavigationItemText({
  as: _Component = _Builtin.Block,
  text = "Text",
}) {
  return (
    <_Component className={_utils.cx(_styles, "navigation-text")} tag="div">
      {text}
    </_Component>
  );
}
