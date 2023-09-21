import React from "react";
import * as _Builtin from "./_Builtin";
import { NavigationItemContainer } from "./NavigationItemContainer";
import * as _utils from "./utils";
import _styles from "./NavigationItemsWrapper.module.css";

export function NavigationItemsWrapper({
  as: _Component = _Builtin.Block,
  items,
}) {
  return (
    <_Component className={_utils.cx(_styles, "navigation-items")} tag="div">
      {items ?? <NavigationItemContainer />}
    </_Component>
  );
}
