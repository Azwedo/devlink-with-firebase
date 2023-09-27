import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ListItem.module.css";

export function ListItem({
  as: _Component = _Builtin.Link,

  link = {
    href: "#",
  },

  name = "Marketing",
  props = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "footer-link")}
      button={false}
      options={link}
      {...props}
    >
      {name}
    </_Component>
  );
}
