import React from "react";
import * as _Builtin from "./_Builtin";
import { ListItem } from "./ListItem";
import * as _utils from "./utils";
import _styles from "./List.module.css";

export function List({
  as: _Component = _Builtin.Block,
  title = "Support",
  items,

  link = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "footer-block")}
      id={_utils.cx(
        _styles,
        "w-node-d549a9ae-2506-edae-bb62-baf4db0549a0-db0549a0"
      )}
      tag="div"
    >
      <_Builtin.Block className={_utils.cx(_styles, "title-small")} tag="div">
        {title}
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "footer-list")} tag="div">
        {items ?? (
          <>
            <ListItem link={link} />
            <ListItem link={link} />
            <ListItem link={link} />
          </>
        )}
      </_Builtin.Block>
    </_Component>
  );
}
