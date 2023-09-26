import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CompanyLogo.module.css";

export function CompanyLogo({ as: _Component = _Builtin.Image }) {
  return (
    <_Component
      className={_utils.cx(_styles, "logo-image")}
      loading="lazy"
      width="186"
      height="37"
      alt="__wf_reserved_inherit"
      src="https://uploads-ssl.webflow.com/650ab7dceb96e3758196f4dc/650ad505acd4f241780abf1d_Logo.svg"
    />
  );
}
