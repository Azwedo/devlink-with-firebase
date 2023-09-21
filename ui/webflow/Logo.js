import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Logo.module.css";

export function Logo({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "logo-container")} tag="div">
      <_Builtin.Image
        className={_utils.cx(_styles, "image")}
        loading="lazy"
        width="auto"
        height="auto"
        alt="__wf_reserved_inherit"
        src="https://uploads-ssl.webflow.com/650ab7dceb96e3758196f4dc/650ad505acd4f241780abf1d_Logo.svg"
      />
    </_Component>
  );
}
