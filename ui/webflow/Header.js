import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Header.module.css";

export function Header({
  as: _Component = _Builtin.Block,
  text = "Home",

  link = {
    href: "#",
  },
}) {
  return (
    <_Component className={_utils.cx(_styles, "header")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "header-left-container")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "logo-container")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "image")}
            loading="lazy"
            width="auto"
            height="auto"
            alt="__wf_reserved_inherit"
            src="https://uploads-ssl.webflow.com/650ab7dceb96e3758196f4dc/650ad505acd4f241780abf1d_Logo.svg"
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "navigation-items")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "navigation-item")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "navigation-text")}
              button={false}
              options={link}
            >
              {text}
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "navigation-item")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "navigation-text")}
              button={false}
              options={{
                href: "#",
              }}
            >
              {"Services"}
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "navigation-item")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "navigation-text")}
              button={false}
              options={{
                href: "#",
              }}
            >
              {"About"}
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "navigation-item")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "navigation-text")}
              button={false}
              options={{
                href: "#",
              }}
            >
              {"Contact"}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "header-right-container")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "navigation-items")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "profile-container")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "avatar")}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
