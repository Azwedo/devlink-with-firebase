import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PageHeaderInfo.module.css";

export function PageHeaderInfo({
  as: _Component = _Builtin.Block,
  title = "Title",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "page-header-container")}
      tag="div"
    >
      <_Builtin.BlockContainer
        className={_utils.cx(_styles, "container-1261")}
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Heading className={_utils.cx(_styles, "heading")} tag="h1">
          {title}
        </_Builtin.Heading>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
