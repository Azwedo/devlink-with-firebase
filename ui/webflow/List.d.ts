import * as React from "react";
import * as Types from "./types";

declare function List(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  items?: Types.Devlink.Slot;
  link?: Types.Basic.Link;
}): React.JSX.Element;
