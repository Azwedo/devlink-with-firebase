import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NavItemLink.module.css";

export function NavItemLink({ as: _Component = _Builtin.Link }) {
  return (
    <_Component
      className={_utils.cx(_styles, "nav-item")}
      button={false}
      options={{
        href: "#",
      }}
    >
      {"Test"}
    </_Component>
  );
}
