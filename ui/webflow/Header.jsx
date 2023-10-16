import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Header.module.css";

export function Header({
  as: _Component = _Builtin.NavbarWrapper,
  items,
  user,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "navbar")}
      tag="div"
      config={{
        animation: "default",
        collapse: "medium",
        docHeight: false,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.NavbarContainer tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "menu-wrapper")}
          tag="div"
        >
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
          <_Builtin.NavbarMenu
            className={_utils.cx(_styles, "nav")}
            tag="nav"
            role="navigation"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "nav-blocks")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "nav-items")}
                tag="div"
              >
                {items ?? (
                  <>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "nav-item-2")}
                      button={false}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Pagename"}
                    </_Builtin.Link>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "nav-item-active-2")}
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
              <_Builtin.Block
                className={_utils.cx(_styles, "auth-handler")}
                tag="div"
              >
                {user ?? (
                  <>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "mini-button-mobile")}
                      button={true}
                      options={{
                        href: "#",
                      }}
                    >
                      {"Logout"}
                    </_Builtin.Link>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "user-2")}
                      button={false}
                      options={{
                        href: "#",
                      }}
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "username")}
                        tag="div"
                      >
                        {"Benjamin"}
                      </_Builtin.Block>
                      <_Builtin.Image
                        className={_utils.cx(_styles, "avatar")}
                        loading="lazy"
                        width="38"
                        height="38"
                        alt=""
                        src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.fd6bdcfeb6.svg"
                      />
                    </_Builtin.Link>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "header-btn-2")}
                      button={true}
                      options={{
                        href: "#",
                        preload: "none",
                      }}
                    >
                      {"Login with Google"}
                    </_Builtin.Link>
                  </>
                )}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.NavbarMenu>
          <_Builtin.NavbarButton
            className={_utils.cx(_styles, "ham-menu")}
            tag="div"
          >
            <_Builtin.Icon
              className={_utils.cx(_styles, "icon")}
              widget={{
                type: "icon",
                icon: "nav-menu",
              }}
            />
          </_Builtin.NavbarButton>
        </_Builtin.Block>
      </_Builtin.NavbarContainer>
    </_Component>
  );
}
