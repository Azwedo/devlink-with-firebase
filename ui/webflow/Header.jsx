import React from "react";
import * as _Builtin from "./_Builtin";
import { MiniButtonSecondary } from "./MiniButtonSecondary";
import { UserProfile } from "./UserProfile";
import { Button } from "./Button";
import * as _utils from "./utils";
import _styles from "./Header.module.css";

export function Header({ as: _Component = _Builtin.NavbarWrapper, links }) {
  return (
    <_Component
      className={_utils.cx(_styles, "header-section")}
      tag="div"
      config={{
        animation: "default",
        collapse: "medium",
        docHeight: true,
        duration: 500,
        easing: "ease",
        easing2: "ease",
        noScroll: true,
      }}
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
              alt="__wf_reserved_inherit"
              src="https://uploads-ssl.webflow.com/650ab7dceb96e3758196f4dc/6513fee685cccf8c5ead9a7c_DevlinkFirebase.svg"
            />
          </_Builtin.Link>
          <_Builtin.NavbarMenu
            className={_utils.cx(_styles, "nav-menu")}
            tag="nav"
            role="navigation"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "nav-links-holder")}
              tag="div"
            >
              {links ?? (
                <>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "nav-item")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Pagename"}
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "nav-item-active")}
                    button={false}
                    options={{
                      href: "#",
                    }}
                  >
                    {"Home"}
                  </_Builtin.Link>
                </>
              )}
            </_Builtin.Block>
          </_Builtin.NavbarMenu>
          <_Builtin.Block
            className={_utils.cx(_styles, "right-list")}
            tag="div"
          >
            <MiniButtonSecondary />
            <UserProfile />
            <Button />
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "menu-bar")} tag="div">
            <_Builtin.Image
              className={_utils.cx(_styles, "menu-bar-icon")}
              loading="lazy"
              width="512"
              height="512"
              alt="__wf_reserved_inherit"
              src="https://uploads-ssl.webflow.com/650ab7dceb96e3758196f4dc/650c3e7003d77814d1cf11bc_menu-bar.png"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
