import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./UserProfile.module.css";

export function UserProfile({
  as: _Component = _Builtin.Link,
  text = "Benjamin",
  url = "",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "user")}
      button={false}
      options={{
        href: "#",
      }}
    >
      <_Builtin.Block className={_utils.cx(_styles, "username")} tag="div">
        {text}
      </_Builtin.Block>
      <_Builtin.Image
        className={_utils.cx(_styles, "avatar")}
        loading="lazy"
        width="38"
        height="38"
        alt="__wf_reserved_inherit"
        src={url}
      />
    </_Component>
  );
}
