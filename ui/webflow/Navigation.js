import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Navigation.module.css";

export function Navigation({ as: _Component = _Builtin.Block, left, right }) {
  return (
    <_Component className={_utils.cx(_styles, "header")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "header-left-container")}
        tag="div"
      >
        {left}
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "header-right-container")}
        tag="div"
      >
        {right}
      </_Builtin.Block>
    </_Component>
  );
}
