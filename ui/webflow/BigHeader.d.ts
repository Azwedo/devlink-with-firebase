import * as React from "react";
import * as Types from "./types";

declare function BigHeader(props: {
  as?: React.ElementType;
  links?: Types.Devlink.Slot;
  link?: Types.Basic.Link;
  text?: React.ReactNode;
  user?: Types.Devlink.Slot;
}): React.JSX.Element;
