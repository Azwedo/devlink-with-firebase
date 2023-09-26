import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NavItemLink.module.css";

export function NavItemLink({
  as: _Component = _Builtin.Link,
  text = "Test",

  link = {
    href: "/calendar",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "nav-item")}
      button={false}
      options={link}
    >
      {text}
    </_Component>
  );
}
