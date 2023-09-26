import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./MiniButtonSecondary.module.css";

export function MiniButtonSecondary({
  as: _Component = _Builtin.Link,
  props = {},
  text = "Logout",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "mini-button")}
      button={true}
      options={{
        href: "#",
      }}
      {...props}
    >
      {text}
    </_Component>
  );
}
