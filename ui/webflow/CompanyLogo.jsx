import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CompanyLogo.module.css";

export function CompanyLogo({ as: _Component = _Builtin.Link }) {
  return (
    <_Component
      className={_utils.cx(_styles, "footer-brand")}
      button={false}
      options={{
        href: "#",
      }}
    >
      <_Builtin.Image
        className={_utils.cx(_styles, "logo-image")}
        loading="lazy"
        width="186"
        height="37"
        alt="__wf_reserved_inherit"
        src="https://uploads-ssl.webflow.com/650ab7dceb96e3758196f4dc/6512d21bbcb88ff4f718151d_Frame%20(3).svg"
      />
    </_Component>
  );
}
