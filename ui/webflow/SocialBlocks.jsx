import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SocialBlocks.module.css";

export function SocialBlocks({
  as: _Component = _Builtin.Block,

  twitter = {
    href: "#",
  },

  github = {
    href: "#",
  },

  facebook = {
    href: "#",
  },
}) {
  return (
    <_Component className={_utils.cx(_styles, "footer-social-block")} tag="div">
      <_Builtin.Link
        className={_utils.cx(_styles, "social-media")}
        button={false}
        options={twitter}
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "twitter-icon")}
          loading="lazy"
          width="auto"
          height="auto"
          alt="__wf_reserved_inherit"
          src="https://uploads-ssl.webflow.com/650ab7dceb96e3758196f4dc/6513fe518dcb738f20f26a03_Twitter%20Icon.svg"
        />
      </_Builtin.Link>
      <_Builtin.Link
        className={_utils.cx(_styles, "social-media")}
        button={false}
        options={github}
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "twitter-icon")}
          loading="lazy"
          width="auto"
          height="auto"
          alt="__wf_reserved_inherit"
          src="https://uploads-ssl.webflow.com/650ab7dceb96e3758196f4dc/6513fe515e57af66bc21ecbc_Facebook%20Icon.svg"
        />
      </_Builtin.Link>
      <_Builtin.Link
        className={_utils.cx(_styles, "social-media")}
        button={false}
        options={facebook}
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "twitter-icon")}
          loading="lazy"
          width="auto"
          height="auto"
          alt="__wf_reserved_inherit"
          src="https://uploads-ssl.webflow.com/650ab7dceb96e3758196f4dc/6513fe519ac981f2bd338f29_GitHub%20Icon.svg"
        />
      </_Builtin.Link>
    </_Component>
  );
}
