import * as React from "react";
import * as Types from "./types";

declare function ListItem(props: {
  as?: React.ElementType;
  link?: Types.Basic.Link;
  name?: React.ReactNode;
  props?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
