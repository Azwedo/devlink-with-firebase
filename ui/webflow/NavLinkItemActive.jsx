import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NavLinkItemActive.module.css";

export function NavLinkItemActive({
  as: _Component = _Builtin.Link,

  link = {
    href: "/calendar",
  },

  text = "Calendar",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "nav-item-active")}
      button={false}
      options={link}
    >
      {text}
    </_Component>
  );
}
