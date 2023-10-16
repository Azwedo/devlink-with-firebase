import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CompanyLogo.module.css";

export function CompanyLogo({
  as: _Component = _Builtin.Link,

  logo = {
    href: "#",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "footer-brand")}
      button={false}
      options={logo}
    >
      <_Builtin.Image
        className={_utils.cx(_styles, "logo-image")}
        loading="lazy"
        width="186"
        height="37"
        alt=""
        src="https://uploads-ssl.webflow.com/650ab7dceb96e3758196f4dc/6513fee685cccf8c5ead9a7c_DevlinkFirebase.svg"
      />
    </_Component>
  );
}
