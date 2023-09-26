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
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"76ba38aa-5f5f-6c54-b638-3ebe7ea808e8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"76ba38aa-5f5f-6c54-b638-3ebe7ea808e8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695302783332}},"actionLists":{"a-2":{"id":"a-2","title":"Open Mobile Menu 2","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":-100,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-2-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-2-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeIn","duration":200,"target":{},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}},{"id":"a-2-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":200,"target":{},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1640050440785}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
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
              width="186"
              height="37"
              alt="__wf_reserved_inherit"
              src="https://uploads-ssl.webflow.com/650ab7dceb96e3758196f4dc/650ad505acd4f241780abf1d_Logo.svg"
            />
            <_Builtin.Image
              className={_utils.cx(_styles, "logo-image-2")}
              loading="lazy"
              width="186"
              height="37"
              alt="__wf_reserved_inherit"
              src="https://uploads-ssl.webflow.com/650ab7dceb96e3758196f4dc/650c3e7003d77814d1cf11bf_logo-black.svg"
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
              alt="__wf_reserved_inherit"
              src="https://uploads-ssl.webflow.com/650ab7dceb96e3758196f4dc/650c3e7003d77814d1cf11bc_menu-bar.png"
            />
            <_Builtin.Image
              className={_utils.cx(_styles, "menu-bar-icon-black")}
              loading="lazy"
              width="512"
              height="512"
              alt="__wf_reserved_inherit"
              src="https://uploads-ssl.webflow.com/650ab7dceb96e3758196f4dc/650c3e7003d77814d1cf11c0_menu-bar-black.png"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
