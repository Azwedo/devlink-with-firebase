import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { NavItemLink } from "./NavItemLink";
import { NavLinkItemActive } from "./NavLinkItemActive";
import { MiniButtonSecondary } from "./MiniButtonSecondary";
import { UserProfile } from "./UserProfile";
import { Button } from "./Button";
import * as _utils from "./utils";
import _styles from "./BigHeader.module.css";

const _interactionsData = JSON.parse(
  '{"events":{},"actionLists":{},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function BigHeader({
  as: _Component = _Builtin.Section,
  links,

  link = {
    href: "/sales",
  },

  text = "Projects",
  user,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "header-section")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.BlockContainer
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "header-flex")} tag="div">
          <_Builtin.Link
            className={_utils.cx(_styles, "logo")}
            button={false}
            options={{
              href: "#",
            }}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "logo-image")}
              loading="lazy"
              width="400"
              height="Auto"
              alt=""
              src="https://uploads-ssl.webflow.com/650ab7dceb96e3758196f4dc/6513fee685cccf8c5ead9a7c_DevlinkFirebase.svg"
            />
          </_Builtin.Link>
          <_Builtin.Block className={_utils.cx(_styles, "menu-list")} tag="div">
            {links ?? (
              <>
                <NavItemLink text={text} link={link} />
                <NavLinkItemActive text={text} link={link} />
              </>
            )}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "right-list")}
            tag="div"
          >
            {user ?? (
              <>
                <MiniButtonSecondary />
                <UserProfile />
                <Button />
              </>
            )}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "menu-bar")}
            data-w-id="76ba38aa-5f5f-6c54-b638-3ebe7ea808e8"
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "menu-bar-icon")}
              loading="lazy"
              width="512"
              height="512"
              alt="menu"
              src="https://uploads-ssl.webflow.com/650ab7dceb96e3758196f4dc/650c3e7003d77814d1cf11bc_menu-bar.png"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
