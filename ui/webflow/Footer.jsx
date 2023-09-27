import React from "react";
import * as _Builtin from "./_Builtin";
import { CompanyLogo } from "./CompanyLogo";
import { SocialBlocks } from "./SocialBlocks";
import { List } from "./List";
import { Divider } from "./Divider";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

export function Footer({
  as: _Component = _Builtin.Section,
  copyright = "© 2020 Your Company, Inc. All rights reserved.",
  description = "Making the world a better place through constructing elegant hierarchies.",
  lists,
  icons,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "footer-dark")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.BlockContainer
        grid={{
          type: "container",
        }}
        tag="div"
      >
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
                {description}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "social-block-holders")}
              tag="div"
            >
              {icons ?? <SocialBlocks />}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "footer-content")}
            tag="div"
          >
            {lists ?? (
              <>
                <List title="Solutions" />
                <List title="Informations" />
                <List title="Other" />
              </>
            )}
          </_Builtin.Block>
        </_Builtin.Block>
        <Divider />
        <_Builtin.Block
          className={_utils.cx(_styles, "footer-copyright-center")}
          tag="div"
        >
          {copyright}
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
