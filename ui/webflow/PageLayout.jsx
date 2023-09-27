import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PageLayout.module.css";

export function PageLayout({ as: _Component = _Builtin.Section, children }) {
  return (
    <_Component
      className={_utils.cx(_styles, "page-content")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.BlockContainer
        className={_utils.cx(_styles, "page-container")}
        grid={{
          type: "container",
        }}
        tag="div"
      >
        {children ?? (
          <_Builtin.Block
            className={_utils.cx(_styles, "borderer")}
            tag="div"
          />
        )}
      </_Builtin.BlockContainer>
    </_Component>
  );
}
