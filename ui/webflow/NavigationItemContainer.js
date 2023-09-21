import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NavigationItemContainer.module.css";

export function NavigationItemContainer({
  as: _Component = _Builtin.Block,
  item,
}) {
  return (
    <_Component className={_utils.cx(_styles, "navigation-item")} tag="div">
      {item}
    </_Component>
  );
}
