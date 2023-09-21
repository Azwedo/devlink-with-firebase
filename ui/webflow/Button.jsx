import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Button.module.css";

export function Button({
  as: _Component = _Builtin.Link,
  children = "Login with Google",
  show = true,
  props = {},
}) {
  return show ? (
    <_Component
      className={_utils.cx(_styles, "header-btn")}
      button={true}
      options={{
        href: "#",
        preload: "none",
      }}
      {...props}
    >
      {children}
    </_Component>
  ) : null;
}
