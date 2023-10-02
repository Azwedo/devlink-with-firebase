import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FullPageCenterLayout.module.css";

export function FullPageCenterLayout({
  as: _Component = _Builtin.Section,
  children,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "full-page")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.BlockContainer
        className={_utils.cx(_styles, "full-page-container")}
        grid={{
          type: "container",
        }}
        tag="div"
      >
        {children}
      </_Builtin.BlockContainer>
    </_Component>
  );
}
