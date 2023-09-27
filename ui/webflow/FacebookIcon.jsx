import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FacebookIcon.module.css";

export function FacebookIcon({
  as: _Component = _Builtin.Link,
  facebook = true,
}) {
  return facebook ? (
    <_Component
      className={_utils.cx(_styles, "footer-social-link")}
      button={false}
      options={{
        href: "#",
      }}
    >
      <_Builtin.Image
        className={_utils.cx(_styles, "social-media-icon")}
        loading="lazy"
        width={27}
        height="auto"
        alt="__wf_reserved_inherit"
        src="https://uploads-ssl.webflow.com/650985fc39f1a60f558a8564/6512a50f5cff822a63654a61_facebook.svg"
      />
    </_Component>
  ) : null;
}
