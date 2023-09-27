import * as React from "react";
import * as Types from "./types";

declare function Header(props: {
  as?: React.ElementType;
  items?: Types.Devlink.Slot;
  user?: Types.Devlink.Slot;
}): React.JSX.Element;
