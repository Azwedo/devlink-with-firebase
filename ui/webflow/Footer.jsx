import React from "react";
import * as _Builtin from "./_Builtin";
import { CompanyLogo } from "./CompanyLogo";
import { FacebookIcon } from "./FacebookIcon";
import { InstagramIcon } from "./InstagramIcon";
import { TwitterIcon } from "./TwitterIcon";
import { GithubIcon } from "./GithubIcon";
import { YoutubeIcon } from "./YoutubeIcon";
import { List } from "./List";
import { Divider } from "./Divider";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

export function Footer({
  as: _Component = _Builtin.Section,
  lists
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "footer-dark")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "footer-wrapper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "footer-brand-holder")}
            tag="div"
          >
            <CompanyLogo />
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-block")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "footer-link")}
                button={false}
                options={{
                  href: "#",
                }}
              >
                {
                  "Making the world a better place through constructing elegant hierarchies."
                }
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "footer-social-block")}
              tag="div"
            >
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
              <GithubIcon />
              <YoutubeIcon />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "footer-content")}
            tag="div"
          >
            {lists ?? (<List  items={<FooterListItem />}/>)}

          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <Divider />
      <_Builtin.Block
        className={_utils.cx(_styles, "footer-copyright-center")}
        tag="div"
      >
        {"© 2020 Your Company, Inc. All rights reserved."}
      </_Builtin.Block>
    </_Component>
  );
}
