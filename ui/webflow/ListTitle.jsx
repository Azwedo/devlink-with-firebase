import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ListTitle.module.css";

export function ListTitle({
  as: _Component = _Builtin.Block,
  title = "Solutions",
}) {
  return (
    <_Component className={_utils.cx(_styles, "title-small")} tag="div">
      {title}
    </_Component>
  );
}
