import * as React from "react";
import * as Types from "./types";

declare function Button(props: {
  as?: React.ElementType;
  children?: React.ReactNode;
  show?: Types.Visibility.VisibilityConditions;
  props?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
