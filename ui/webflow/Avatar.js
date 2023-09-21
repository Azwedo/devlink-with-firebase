import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Avatar.module.css";

export function Avatar({ as: _Component = _Builtin.Block, item }) {
  return (
    <_Component className={_utils.cx(_styles, "avatar")} tag="div">
      {item}
    </_Component>
  );
}
