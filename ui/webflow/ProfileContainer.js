import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ProfileContainer.module.css";

export function ProfileContainer({ as: _Component = _Builtin.Block, item }) {
  return (
    <_Component className={_utils.cx(_styles, "profile-container")} tag="div">
      {item}
    </_Component>
  );
}
