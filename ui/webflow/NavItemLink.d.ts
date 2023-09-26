import * as React from "react";
import * as Types from "./types";

declare function NavItemLink(props: {
  as?: React.ElementType;
  text?: React.ReactNode;
  link?: Types.Basic.Link;
}): React.JSX.Element;
